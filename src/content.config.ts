import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    tags: z.array(z.string()),
    status: z.enum(["Public", "Private", "Alpha", "Planned"]),
    year: z.number(),
    spoke: z.enum(["finance", "engineering"]),
    metrics: z.array(z.object({ label: z.string(), value: z.string() })),
    stack: z.array(z.string()),
    repo: z.string().url().optional(),
  }),
});

const essays = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/essays" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    readTime: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { "case-studies": caseStudies, essays };
