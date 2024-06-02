import { z } from "zod";

const createCoursePackageSchema = z.object({
  packageId: z.string(),
  courseId: z.string(),
});

const updateCoursePackageSchema = z.object({
  id: z.string(),
  packageId: z.string(),
  courseId: z.string(),
});

export { createCoursePackageSchema, updateCoursePackageSchema };
