import { z } from "zod";

const createQuestionTypeSchema = z.object({
  name: z.string(),
});

const updateQuestionTypeSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export { createQuestionTypeSchema, updateQuestionTypeSchema };
