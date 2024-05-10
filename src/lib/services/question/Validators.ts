import { z } from "zod";

const createQuestionSchema = z.object({
  text: z.string(),
  imageUrl: z.string(),
  topicId: z.string(),
  questionLevelId: z.string(),
  questionTypeId: z.string(),
});

const updateQuestionSchema = z.object({
  id: z.string(),
  text: z.string(),
  imageUrl: z.string(),
  topicId: z.string(),
  questionLevelId: z.string(),
  questionTypeId: z.string(),
});

export { createQuestionSchema, updateQuestionSchema };
