import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      datePublished: z.date(),
    }),
  });

export const collections = {
  'blog': blogCollection,
};