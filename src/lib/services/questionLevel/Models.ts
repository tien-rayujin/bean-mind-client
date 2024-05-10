import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateQuestionLevelRequestModel = Pick<QuestionLevel, "name">;

type UpdateQuestionLevelRequestModel = Pick<QuestionLevel, "id" | "name">;

// #region Response Model
type GetQuestionLevelsResonseModel = Pagination<QuestionLevel>;

type GetQuestionLevelResponseModel = QuestionLevel;

type CreateQuestionLevelResponseModel = QuestionLevel;

type UpdateQuestionLevelResponseModel = QuestionLevel;

type DeleteQuestionLevelResponseModel = QuestionLevel;

export type {
  CreateQuestionLevelRequestModel,
  UpdateQuestionLevelRequestModel,
  GetQuestionLevelResponseModel,
  GetQuestionLevelsResonseModel,
  CreateQuestionLevelResponseModel,
  UpdateQuestionLevelResponseModel,
  DeleteQuestionLevelResponseModel,
};
