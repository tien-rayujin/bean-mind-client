import { z } from "zod";

const createChapterSchema = z.object({
  title: z.string(),
  description: z.string(),
  courseId: z.string(),
});

const updateChapterSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
});

export { createChapterSchema, updateChapterSchema };
