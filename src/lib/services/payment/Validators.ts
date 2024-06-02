import { z } from "zod";

const createPaymentSchema = z.object({
  amount: z.number(),
  paymentDate: z.date(),
  paymentStatus: z.number(),
  packageOrderId: z.string(),
});

const updatePaymentSchema = z.object({
  id: z.string(),
  amount: z.number(),
  paymentDate: z.date(),
  paymentStatus: z.number(),
  packageOrderId: z.string(),
});

export { createPaymentSchema, updatePaymentSchema };
