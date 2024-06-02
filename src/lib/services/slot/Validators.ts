import { z } from "zod";

const createSlotSchema = z.object({
  startTime: z.string(),
  endTime: z.string(),
});

const updateSlotSchema = z.object({
  id: z.string(),
  startTime: z.string(),
  endTime: z.string(),
});

export { createSlotSchema, updateSlotSchema };
