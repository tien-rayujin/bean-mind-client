import { z } from "zod";

const createWorksheetTemplateSchema = z.object({
  classification: z.string(),
  easyQuestionCount: z.number(),
  normalQuestionCount: z.number(),
  hardQuestionCount: z.number(),
  totalQuestionCount: z.number(),
  // suffle: z.boolean(),
  subjectId: z.string(),
  chapterId: z.string(),
  topicId: z.string(),
});

const updateWorksheetTemplateSchema = z.object({
  id: z.string(),
  classification: z.string(),
  easyQuestionCount: z.number(),
  normalQuestionCount: z.number(),
  hardQuestionCount: z.number(),
  totalQuestionCount: z.number(),
  // suffle: z.boolean(),
  subjectId: z.string(),
  chapterId: z.string(),
  topicId: z.string(),
});

export { createWorksheetTemplateSchema, updateWorksheetTemplateSchema };
