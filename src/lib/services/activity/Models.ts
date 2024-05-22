import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateActivityRequestModel = Pick<Activity, "activityTypeId" | "topicId">;

type UpdateActivityRequestModel = Pick<
  Activity,
  "id" | "activityTypeId" | "topicId"
>;

// #region Response Model
type GetActivitiesResonseModel = Pagination<Activity>;

type GetActivityResponseModel = Activity;

type CreateActivityResponseModel = Activity;

type UpdateActivityResponseModel = Activity;

type DeleteActivityResponseModel = Activity;

export type {
  CreateActivityRequestModel,
  UpdateActivityRequestModel,
  GetActivityResponseModel,
  GetActivitiesResonseModel,
  CreateActivityResponseModel,
  UpdateActivityResponseModel,
  DeleteActivityResponseModel,
};
