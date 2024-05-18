import { z } from "zod";

const createQuestionAnswerSchema = z.object({
  text: z.string(),
  orderIndex: z.number(),
  questionId: z.string(),
  isCorrect: z.boolean(),
});

const updateQuestionAnswerSchema = z.object({
  id: z.string(),
  text: z.string(),
  orderIndex: z.number(),
  questionId: z.string(),
  isCorrect: z.boolean(),
});

export { createQuestionAnswerSchema, updateQuestionAnswerSchema };
