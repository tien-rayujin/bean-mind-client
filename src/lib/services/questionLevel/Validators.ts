import { z } from "zod";

const createQuestionLevelSchema = z.object({
  name: z.string(),
});

const updateQuestionLevelSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export { createQuestionLevelSchema, updateQuestionLevelSchema };
