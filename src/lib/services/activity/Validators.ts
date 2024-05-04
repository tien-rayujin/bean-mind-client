import { z } from "zod";

const createActivitySchema = z.object({
  activityTypeId: z.string(),
  orderIndex: z.number(),
  topicId: z.string(),
});

const updateActivitySchema = z.object({
  id: z.string(),
  activityTypeId: z.string(),
  orderIndex: z.number(),
  topicId: z.string(),
});

export { createActivitySchema, updateActivitySchema };
