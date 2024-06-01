import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateQuestionAnswerRequestModel = Pick<
  QuestionAnswer,
  "text" | "questionId" | "isCorrect"
>;

type UpdateQuestionAnswerRequestModel = Pick<
  QuestionAnswer,
  "id" | "text" | "questionId" | "isCorrect"
>;

// #region Response Model
type GetQuestionAnswersResonseModel = Pagination<QuestionAnswer>;

type GetQuestionAnswerResponseModel = QuestionAnswer;

type CreateQuestionAnswerResponseModel = QuestionAnswer;

type UpdateQuestionAnswerResponseModel = QuestionAnswer;

type DeleteQuestionAnswerResponseModel = QuestionAnswer;

export type {
  CreateQuestionAnswerRequestModel,
  UpdateQuestionAnswerRequestModel,
  GetQuestionAnswerResponseModel,
  GetQuestionAnswersResonseModel,
  CreateQuestionAnswerResponseModel,
  UpdateQuestionAnswerResponseModel,
  DeleteQuestionAnswerResponseModel,
};
