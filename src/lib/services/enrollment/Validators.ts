import { z } from "zod";

const createEnrollmentSchema = z.object({
  packageOrderId: z.string(),
  studentId: z.string(),
  lecturerId: z.string(),
});

const updateEnrollmentSchema = z.object({
  id: z.string(),
  packageOrderId: z.string(),
  studentId: z.string(),
  lecturerId: z.string(),
});

export { createEnrollmentSchema, updateEnrollmentSchema };
