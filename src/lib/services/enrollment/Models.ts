import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateEnrollmentRequestModel = Pick<
  Enrollment,
  "packageOrderId" | "studentId" | "lecturerId"
>;

type UpdateEnrollmentRequestModel = Pick<
  Enrollment,
  "id" | "packageOrderId" | "studentId" | "lecturerId"
>;

// #region Response Model
type GetEnrollmentsResonseModel = Pagination<Enrollment>;

type GetEnrollmentResponseModel = Enrollment;

type CreateEnrollmentResponseModel = Enrollment;

type UpdateEnrollmentResponseModel = Enrollment;

type DeleteEnrollmentResponseModel = Enrollment;

export type {
  CreateEnrollmentRequestModel,
  UpdateEnrollmentRequestModel,
  GetEnrollmentResponseModel,
  GetEnrollmentsResonseModel,
  CreateEnrollmentResponseModel,
  UpdateEnrollmentResponseModel,
  DeleteEnrollmentResponseModel,
};
