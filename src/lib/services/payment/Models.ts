import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreatePaymentRequestModel = Pick<
  Payment,
  "amount" | "paymentDate" | "paymentStatus" | "packageOrderId"
>;

type UpdatePaymentRequestModel = Pick<
  Payment,
  "id" | "amount" | "paymentDate" | "paymentStatus" | "packageOrderId"
>;

// #region Response Model
type GetPaymentsResonseModel = Pagination<Payment>;

type GetPaymentResponseModel = Payment;

type CreatePaymentResponseModel = Payment;

type UpdatePaymentResponseModel = Payment;

type DeletePaymentResponseModel = Payment;

export type {
  CreatePaymentRequestModel,
  UpdatePaymentRequestModel,
  GetPaymentResponseModel,
  GetPaymentsResonseModel,
  CreatePaymentResponseModel,
  UpdatePaymentResponseModel,
  DeletePaymentResponseModel,
};
