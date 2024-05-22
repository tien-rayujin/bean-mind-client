import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateTopicRequestModel = Pick<
  Topic,
  "title" | "description" | "chapterId"
>;

type UpdateTopicRequestModel = Pick<Topic, "id" | "title" | "description">;

// #region Response Model
type GetTopicsResonseModel = Pagination<Topic>;

type GetTopicResponseModel = Topic;

type CreateTopicResponseModel = Topic;

type UpdateTopicResponseModel = Topic;

type DeleteTopicResponseModel = Topic;

export type {
  CreateTopicRequestModel,
  UpdateTopicRequestModel,
  GetTopicResponseModel,
  GetTopicsResonseModel,
  CreateTopicResponseModel,
  UpdateTopicResponseModel,
  DeleteTopicResponseModel,
};
