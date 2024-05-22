import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateQuestionTypeRequestModel = Pick<QuestionType, "name">;

type UpdateQuestionTypeRequestModel = Pick<QuestionType, "id" | "name">;

// #region Response Model
type GetQuestionTypesResonseModel = Pagination<QuestionType>;

type GetQuestionTypeResponseModel = QuestionType;

type CreateQuestionTypeResponseModel = QuestionType;

type UpdateQuestionTypeResponseModel = QuestionType;

type DeleteQuestionTypeResponseModel = QuestionType;

export type {
  CreateQuestionTypeRequestModel,
  UpdateQuestionTypeRequestModel,
  GetQuestionTypeResponseModel,
  GetQuestionTypesResonseModel,
  CreateQuestionTypeResponseModel,
  UpdateQuestionTypeResponseModel,
  DeleteQuestionTypeResponseModel,
};
