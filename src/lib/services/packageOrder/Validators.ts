import { z } from "zod";

const createPackageOrderSchema = z.object({
  packageId: z.string(),
});

const updatePackageOrderSchema = z.object({
  id: z.string(),
  packageId: z.string(),
});

export { createPackageOrderSchema, updatePackageOrderSchema };
