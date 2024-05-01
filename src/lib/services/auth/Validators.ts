import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 character"),
});

const registerSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 character"),
});

const confirmEmailSchema = z.object({
  userId: z.string(),
  code: z.string(),
});

const resendConfirmEmailSchema = z.object({
  email: z.string().email("Invalid email format"),
});

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email format"),
});

const resetPasswordSchema = z.object({
  email: z.string().email("Invalid email format"),
  resetCode: z.string(),
  newPassword: z.string().min(8, "Password must be at least 8 character"),
});

const getUserInfoEmailSchema = z.object({});

export {
  loginSchema,
  registerSchema,
  confirmEmailSchema,
  resendConfirmEmailSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  getUserInfoEmailSchema,
};
