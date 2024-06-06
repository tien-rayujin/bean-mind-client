import { z } from "zod";

const createUserSchema = z.object({
  userName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
});

const updateUserSchema = z.object({
  id: z.string(),
  userName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
});

export { createUserSchema, updateUserSchema };
