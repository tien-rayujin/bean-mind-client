import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateChapterRequestModel = Pick<
  Chapter,
  "title" | "description" | "courseId"
>;

type UpdateChapterRequestModel = Pick<Chapter, "id" | "title" | "description">;

// #region Response Model
type GetChaptersResonseModel = Pagination<Chapter>;

type GetChapterResponseModel = Chapter;

type CreateChapterResponseModel = Chapter;

type UpdateChapterResponseModel = Chapter;

type DeleteChapterResponseModel = Chapter;

export type {
  CreateChapterRequestModel,
  UpdateChapterRequestModel,
  GetChapterResponseModel,
  GetChaptersResonseModel,
  CreateChapterResponseModel,
  UpdateChapterResponseModel,
  DeleteChapterResponseModel,
};
