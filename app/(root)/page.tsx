import SearchForm from "@/components/SearchForm";
import StartupCard, { StartTypeCard } from "@/components/StartupCard";
import {
  MOST_POPULAR_STARTUPS_QUERY,
  STARTUPS_QUERY,
} from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";
import { auth } from "@/auth";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const session = await auth();

  console.log("session", session);

  const [{ data: posts }, mostPopularStartups] = await Promise.all([
    sanityFetch({ query: STARTUPS_QUERY, params }),
    client.fetch(MOST_POPULAR_STARTUPS_QUERY),
  ]);

  return (
    <>
      <section className="pink_container">
        <p className="tag">Pitch, Vote, and Grow</p>
        <h1 className="heading">
          Pitch your startup, <br /> connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      {mostPopularStartups.length > 0 && (
        <section className="section_container">
          <p className="text-30-semibold">Most Popular Startups</p>
          <ul className="mt-7 card_grid">
            {mostPopularStartups.map((startup: StartTypeCard) => (
              <StartupCard key={startup?._id} post={startup} />
            ))}
          </ul>
        </section>
      )}

      <SanityLive />
    </>
  );
}
