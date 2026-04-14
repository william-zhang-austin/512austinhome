import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.optional(image()),
      youtubeId: z.string().optional(),
      tags: z.array(z.string()).default([]),
      neighborhood: z.string().optional(),
      canonical: z.string().url().optional(),
      faqs: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
    }),
});

const neighborhoods = defineCollection({
  loader: glob({ base: './src/content/neighborhoods', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      region: z.string(),
      description: z.string(),
      medianPrice: z.string(),
      priceRange: z.string(),
      topSchools: z.array(z.string()).default([]),
      lifestyle: z.array(z.string()).default([]),
      heroImage: z.optional(image()),
      youtubeId: z.string().optional(),
      mapEmbed: z.string().optional(),
    }),
});

export const collections = { blog, neighborhoods };
