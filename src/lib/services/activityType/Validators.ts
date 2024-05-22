import { z } from "zod";

const createActivityTypeSchema = z.object({
  name: z.string(),
});

const updateActivityTypeSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export { createActivityTypeSchema, updateActivityTypeSchema };
