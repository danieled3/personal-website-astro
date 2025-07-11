import { defineCollection, z } from 'astro:content';

// Define the schema for the history collection
export const collections = {
  'history': defineCollection({
    type: 'data',
    schema: z.object({
      timespan: z.string(),
      icon: z.string(),
      iconAlt: z.string().optional(),
      title: z.string(),
      organization: z.string(),
      description: z.string(),
      links: z.array(
        z.object({
          text: z.string(),
          url: z.string().url().optional()
        })
      ).optional(),
      items: z.array(z.string()).optional()
    })
  }),
  'projects': defineCollection({
    type: 'data',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      url: z.string().url().optional()
    })
  }),
  'articles': defineCollection({
    type: 'data',
    schema: z.object({
      date: z.string(),
      title: z.string(),
      url: z.string().url().optional()
    })
  })
};
