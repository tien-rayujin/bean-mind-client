import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateQuestionRequestModel = Pick<
  Question,
  "text" | "imageUrl" | "topicId" | "questionLevelId" | "questionTypeId"
>;

type UpdateQuestionRequestModel = Pick<
  Question,
  "id" | "text" | "imageUrl" | "topicId" | "questionLevelId" | "questionTypeId"
>;

// #region Response Model
type GetQuestionsResonseModel = Pagination<Question>;

type GetQuestionResponseModel = Question;

type CreateQuestionResponseModel = Question;

type UpdateQuestionResponseModel = Question;

type DeleteQuestionResponseModel = Question;

export type {
  CreateQuestionRequestModel,
  UpdateQuestionRequestModel,
  GetQuestionResponseModel,
  GetQuestionsResonseModel,
  CreateQuestionResponseModel,
  UpdateQuestionResponseModel,
  DeleteQuestionResponseModel,
};
