import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateWorksheetQuestionRequestModel = Pick<
  WorksheetQuestion,
  "questionId" | "worksheetId"
>;

type UpdateWorksheetQuestionRequestModel = Pick<
  WorksheetQuestion,
  "id" | "questionId" | "worksheetId"
>;

// #region Response Model
type GetActivitiesResonseModel = Pagination<WorksheetQuestion>;

type GetWorksheetQuestionResponseModel = WorksheetQuestion;

type CreateWorksheetQuestionResponseModel = WorksheetQuestion;

type UpdateWorksheetQuestionResponseModel = WorksheetQuestion;

type DeleteWorksheetQuestionResponseModel = WorksheetQuestion;

export type {
  CreateWorksheetQuestionRequestModel,
  UpdateWorksheetQuestionRequestModel,
  GetWorksheetQuestionResponseModel,
  GetActivitiesResonseModel,
  CreateWorksheetQuestionResponseModel,
  UpdateWorksheetQuestionResponseModel,
  DeleteWorksheetQuestionResponseModel,
};
