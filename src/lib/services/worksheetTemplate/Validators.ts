import { z } from "zod";

enum ClasscificationEnum {
  subject = 0,
  chapter = 1,
  topic = 2,
}

const createWorksheetTemplateSchema = z.object({
  classification: z.nativeEnum(ClasscificationEnum),
  easyQuestionCount: z.number(),
  normalQuestionCount: z.number(),
  hardQuestionCount: z.number(),
  totalQuestionCount: z.number(),
  suffle: z.boolean(),
  subjectId: z.string(),
  chapterId: z.string(),
  topicId: z.string(),
});

const updateWorksheetTemplateSchema = z.object({
  id: z.string(),
  classification: z.nativeEnum(ClasscificationEnum),
  easyQuestionCount: z.number(),
  normalQuestionCount: z.number(),
  hardQuestionCount: z.number(),
  totalQuestionCount: z.number(),
  suffle: z.boolean(),
  subjectId: z.string(),
  chapterId: z.string(),
  topicId: z.string(),
});

export { createWorksheetTemplateSchema, updateWorksheetTemplateSchema };
