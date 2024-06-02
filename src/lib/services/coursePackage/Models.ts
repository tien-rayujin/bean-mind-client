import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateCoursePackageRequestModel = Pick<
  CoursePackage,
  "courseId" | "packageId"
>;

type UpdateCoursePackageRequestModel = Pick<
  CoursePackage,
  "id" | "courseId" | "packageId"
>;

// #region Response Model
type GetCoursePackagesResonseModel = Pagination<CoursePackage>;

type GetCoursePackageResponseModel = CoursePackage;

type CreateCoursePackageResponseModel = CoursePackage;

type UpdateCoursePackageResponseModel = CoursePackage;

type DeleteCoursePackageResponseModel = CoursePackage;

export type {
  CreateCoursePackageRequestModel,
  UpdateCoursePackageRequestModel,
  GetCoursePackageResponseModel,
  GetCoursePackagesResonseModel,
  CreateCoursePackageResponseModel,
  UpdateCoursePackageResponseModel,
  DeleteCoursePackageResponseModel,
};
