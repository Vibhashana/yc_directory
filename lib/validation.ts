import { client } from "@/sanity/lib/client";
import { STARTUP_BY_TITLE_QUERY } from "@/sanity/lib/queries";
import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters")
    .refine(
      async (title) => {
        try {
          const exists = await client.fetch(STARTUP_BY_TITLE_QUERY, { title });
          return !exists;
        } catch {
          return false;
        }
      },
      { message: "This startup name is already taken" }
    ),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(500, "Description cannot exceed 500 characters"),
  category: z
    .string()
    .min(3, "Category must be at least 3 characters")
    .max(20, "Category cannot exceed 20 characters"),
  link: z
    .string()
    .url({ message: "" })
    .refine(
      async (url) => {
        try {
          const res = await fetch(url, { method: "HEAD" });
          const contentType = res.headers.get("content-type");

          return contentType?.startsWith("image/");
        } catch {
          return false;
        }
      },
      { message: "Please provide a valid image URL" }
    ),
  pitch: z.string().min(10, "Pitch must be at least 10 characters"),
});
