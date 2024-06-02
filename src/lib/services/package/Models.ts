import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreatePackageRequestModel = Pick<Package, "name" | "gradeLevelId">;

type UpdatePackageRequestModel = Pick<Package, "id" | "name" | "gradeLevelId">;

// #region Response Model
type GetPackagesResonseModel = Pagination<Package>;

type GetPackageResponseModel = Package;

type CreatePackageResponseModel = Package;

type UpdatePackageResponseModel = Package;

type DeletePackageResponseModel = Package;

export type {
  CreatePackageRequestModel,
  UpdatePackageRequestModel,
  GetPackageResponseModel,
  GetPackagesResonseModel,
  CreatePackageResponseModel,
  UpdatePackageResponseModel,
  DeletePackageResponseModel,
};
