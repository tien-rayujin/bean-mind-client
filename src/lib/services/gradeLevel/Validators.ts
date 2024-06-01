import { z } from "zod";

const createGradeLevelSchema = z.object({
  name: z.string(),
});

const updateGradeLevelSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export { createGradeLevelSchema, updateGradeLevelSchema };
