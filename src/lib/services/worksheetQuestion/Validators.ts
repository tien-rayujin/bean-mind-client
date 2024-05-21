import { z } from "zod";

const createWorksheetQuestionSchema = z.object({
  questionId: z.string(),
  worksheetId: z.string(),
});

const updateWorksheetQuestionSchema = z.object({
  id: z.string(),
  questionId: z.string(),
  worksheetId: z.string(),
});

export { createWorksheetQuestionSchema, updateWorksheetQuestionSchema };
