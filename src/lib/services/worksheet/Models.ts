import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateWorksheetRequestModel = Pick<
  Worksheet,
  "title" | "description" | "activityId" | "worksheetTemplateId"
>;

type UpdateWorksheetRequestModel = Pick<
  Worksheet,
  "id" | "title" | "description" | "activityId" | "worksheetTemplateId"
>;

// #region Response Model
type GetActivitiesResonseModel = Pagination<Worksheet>;

type GetWorksheetResponseModel = Worksheet;

type CreateWorksheetResponseModel = Worksheet;

type UpdateWorksheetResponseModel = Worksheet;

type DeleteWorksheetResponseModel = Worksheet;

export type {
  CreateWorksheetRequestModel,
  UpdateWorksheetRequestModel,
  GetWorksheetResponseModel,
  GetActivitiesResonseModel,
  CreateWorksheetResponseModel,
  UpdateWorksheetResponseModel,
  DeleteWorksheetResponseModel,
};
