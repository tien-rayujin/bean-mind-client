import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateSubjectRequestModel = Pick<Subject, "title" | "description">;

type UpdateSubjectRequestModel = Pick<Subject, "id" | "title" | "description">;

// #region Response Model
type GetSubjectsResonseModel = Pagination<Subject>;

type GetSubjectResponseModel = Subject;

type CreateSubjectResponseModel = Subject;

type UpdateSubjectResponseModel = Subject;

type DeleteSubjectResponseModel = Subject;

export type {
  CreateSubjectRequestModel,
  UpdateSubjectRequestModel,
  GetSubjectResponseModel,
  GetSubjectsResonseModel,
  CreateSubjectResponseModel,
  UpdateSubjectResponseModel,
  DeleteSubjectResponseModel,
};
