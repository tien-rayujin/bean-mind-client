import { z } from "zod";

const createActivitySchema = z.object({
  activityTypeId: z.string(),
  topicId: z.string(),
});

const updateActivitySchema = z.object({
  id: z.string(),
  activityTypeId: z.string(),
  topicId: z.string(),
});

export { createActivitySchema, updateActivitySchema };
