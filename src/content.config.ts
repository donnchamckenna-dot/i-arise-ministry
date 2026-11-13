import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Retreats and events. One Markdown file per event in src/content/retreats/.
 * Never add an event that has not been confirmed by Iva.
 * See src/content/retreats/_TEMPLATE.md.example for the fields.
 */
const retreats = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/retreats' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    timeNote: z.string().optional(), // e.g. "Arrive from 4pm Friday"
    format: z.enum(['in-person', 'online', 'hybrid']),
    location: z.string().optional(),
    leader: z.string().default('Dr Iva Beranek'),
    audience: z.string().optional(),
    status: z.enum(['open', 'few-places', 'full', 'waiting-list', 'closed']).default('open'),
    cost: z.string().optional(),
    registrationUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

/** Books and writings. One Markdown file per publication in src/content/books/. */
const books = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/books' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    kind: z.enum(['children', 'spirituality', 'academic', 'poetry', 'article']),
    year: z.number().optional(),
    blurb: z.string().optional(),
    publisher: z.string().optional(),
    buyUrl: z.string().url().optional(),
    cover: image().optional(), // relative path to an image in src/assets/books/
    coverAlt: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    verified: z.boolean().default(false), // set true once Iva has confirmed details
  }),
});

export const collections = { retreats, books };
