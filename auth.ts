import NextAuth, { JWT, Session } from "next-auth";
import GitHub from "next-auth/providers/github";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";

// For jwt callback
type JWTCallbackParams = {
  token: JWT & { id?: string };
  account: {
    provider: string;
    type: string;
    providerAccountId: string;
  } | null;
  profile?: {
    id: string;
    login: string;
    bio?: string | null;
  };
}

// For session callback
type SessionCallbackParams = {
  session: Session & { id?: string };
  token: JWT & { id?: string };
}

// @ts-ignore
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({
      user: { name, email, image },
      profile: { id, login, bio },
    }: {
      user: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
      };
      profile: {
        id: string;
        login: string;
        bio?: string | null;
      };
    }) {
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
          id,
        });

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id,
          name,
          username: login,
          email,
          image,
          bio: bio || "",
        });
      }

      return true;
    },
    async jwt({ token, account, profile }: JWTCallbackParams) {
      if (account && profile) {
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
            id: profile?.id,
          });

        token.id = user?._id;
      }

      return token;
    },
    async session({ session, token }: SessionCallbackParams) {
      Object.assign(session, { id: token.id });
      return session;
    },
  },
});
