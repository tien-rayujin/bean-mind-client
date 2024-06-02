import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateSessionRequestModel = Pick<
  Session,
  "enrollmentId" | "lecturerId" | "teachingSlotId"
>;

type UpdateSessionRequestModel = Pick<
  Session,
  "id" | "enrollmentId" | "lecturerId" | "teachingSlotId"
>;

// #region Response Model
type GetSessionsResonseModel = Pagination<Session>;

type GetSessionResponseModel = Session;

type CreateSessionResponseModel = Session;

type UpdateSessionResponseModel = Session;

type DeleteSessionResponseModel = Session;

export type {
  CreateSessionRequestModel,
  UpdateSessionRequestModel,
  GetSessionResponseModel,
  GetSessionsResonseModel,
  CreateSessionResponseModel,
  UpdateSessionResponseModel,
  DeleteSessionResponseModel,
};
