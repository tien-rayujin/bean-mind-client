import { z } from "zod";

const createCourseSchema = z.object({
  title: z.string(),
  description: z.string(),
  subjectId: z.string(),
});

const updateCourseSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
});

export { createCourseSchema, updateCourseSchema };
