import { z } from "zod";

const createTeachingSlotSchema = z.object({
  date: z.date(),
  gradeLevelId: z.string(),
  lecturerId: z.string(),
  slotId: z.string(),
});

const updateTeachingSlotSchema = z.object({
  id: z.string(),
  date: z.date(),
  gradeLevelId: z.string(),
  lecturerId: z.string(),
  slotId: z.string(),
});

export { createTeachingSlotSchema, updateTeachingSlotSchema };
