import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateCourseRequestModel = Pick<Course, "title" | "description" | "subjectId" >;

type UpdateCourseRequestModel = Pick<Course, "id" | "title" | "description">;

// #region Response Model
type GetCoursesResonseModel = Pagination<Course>;

type GetCourseResponseModel = Course;

type CreateCourseResponseModel = Course;

type UpdateCourseResponseModel = Course;

type DeleteCourseResponseModel = Course;

export type {
  CreateCourseRequestModel,
  UpdateCourseRequestModel,
  GetCourseResponseModel,
  GetCoursesResonseModel,
  CreateCourseResponseModel,
  UpdateCourseResponseModel,
  DeleteCourseResponseModel,
};
