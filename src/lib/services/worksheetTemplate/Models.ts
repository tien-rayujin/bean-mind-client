import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateWorksheetTemplateRequestModel = Pick<
  WorksheetTemplate,
  | "classification"
  | "easyQuestionCount"
  | "normalQuestionCount"
  | "hardQuestionCount"
  | "totalQuestionCount"
  | "subjectId"
  | "chapterId"
  | "topicId"
>;

type UpdateWorksheetTemplateRequestModel = Pick<
  WorksheetTemplate,
  | "id"
  | "classification"
  | "easyQuestionCount"
  | "normalQuestionCount"
  | "hardQuestionCount"
  | "totalQuestionCount"
  | "subjectId"
  | "chapterId"
  | "topicId"
>;

// #region Response Model
type GetWorksheetTemplatesResonseModel = Pagination<WorksheetTemplate>;

type GetWorksheetTemplateResponseModel = WorksheetTemplate;

type CreateWorksheetTemplateResponseModel = WorksheetTemplate;

type UpdateWorksheetTemplateResponseModel = WorksheetTemplate;

type DeleteWorksheetTemplateResponseModel = WorksheetTemplate;

export type {
  CreateWorksheetTemplateRequestModel,
  UpdateWorksheetTemplateRequestModel,
  GetWorksheetTemplateResponseModel,
  GetWorksheetTemplatesResonseModel,
  CreateWorksheetTemplateResponseModel,
  UpdateWorksheetTemplateResponseModel,
  DeleteWorksheetTemplateResponseModel,
};
