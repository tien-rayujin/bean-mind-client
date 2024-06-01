import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateGradeLevelRequestModel = Pick<GradeLevel, "name">;

type UpdateGradeLevelRequestModel = Pick<GradeLevel, "id" | "name">;

// #region Response Model
type GetGradeLevelsResonseModel = Pagination<GradeLevel>;

type GetGradeLevelResponseModel = GradeLevel;

type CreateGradeLevelResponseModel = GradeLevel;

type UpdateGradeLevelResponseModel = GradeLevel;

type DeleteGradeLevelResponseModel = GradeLevel;

export type {
  CreateGradeLevelRequestModel,
  UpdateGradeLevelRequestModel,
  GetGradeLevelResponseModel,
  GetGradeLevelsResonseModel,
  CreateGradeLevelResponseModel,
  UpdateGradeLevelResponseModel,
  DeleteGradeLevelResponseModel,
};
