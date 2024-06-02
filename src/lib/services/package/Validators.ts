import { z } from "zod";

const createPackageSchema = z.object({
  name: z.string(),
  gradeLevelId: z.string(),
});

const updatePackageSchema = z.object({
  id: z.string(),
  name: z.string(),
  gradeLevelId: z.string(),
});

export { createPackageSchema, updatePackageSchema };
