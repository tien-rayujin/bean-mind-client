import { z } from "zod";

const createTopicSchema = z.object({
  title: z.string(),
  description: z.string(),
  chapterId: z.string(),
});

const updateTopicSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
});

export { createTopicSchema, updateTopicSchema };
