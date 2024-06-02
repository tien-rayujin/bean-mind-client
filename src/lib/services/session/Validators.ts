import { z } from "zod";

const createSessionSchema = z.object({
  enrollmentId: z.string(),
  lecturerId: z.string(),
  teachingSlotId: z.string(),
});

const updateSessionSchema = z.object({
  id: z.string(),
  enrollmentId: z.string(),
  lecturerId: z.string(),
  teachingSlotId: z.string(),
});

export { createSessionSchema, updateSessionSchema };
