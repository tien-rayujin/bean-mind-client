import { z } from "zod";

const createWorksheetSchema = z.object({
  title: z.string(),
  description: z.string(),
  activityId: z.string(),
  worksheetTemplateId: z.string(),
});

const updateWorksheetSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  activityId: z.string(),
  worksheetTemplateId: z.string(),
});

export { createWorksheetSchema, updateWorksheetSchema };
