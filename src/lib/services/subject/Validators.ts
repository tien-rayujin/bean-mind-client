import { z } from "zod";

const createSubjectSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const updateSubjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
});

export { createSubjectSchema, updateSubjectSchema };
