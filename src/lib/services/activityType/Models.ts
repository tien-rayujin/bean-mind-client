import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateActivityTypeRequestModel = Pick<ActivityType, "name">;

type UpdateActivityTypeRequestModel = Pick<ActivityType, "id" | "name">;

// #region Response Model
type GetActivityTypesResonseModel = Pagination<ActivityType>;

type GetActivityTypeResponseModel = ActivityType;

type CreateActivityTypeResponseModel = ActivityType;

type UpdateActivityTypeResponseModel = ActivityType;

type DeleteActivityTypeResponseModel = ActivityType;

export type {
  CreateActivityTypeRequestModel,
  UpdateActivityTypeRequestModel,
  GetActivityTypeResponseModel,
  GetActivityTypesResonseModel,
  CreateActivityTypeResponseModel,
  UpdateActivityTypeResponseModel,
  DeleteActivityTypeResponseModel,
};
