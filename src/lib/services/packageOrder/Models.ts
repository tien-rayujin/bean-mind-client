import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreatePackageOrderRequestModel = Pick<PackageOrder, "packageId">;

type UpdatePackageOrderRequestModel = Pick<PackageOrder, "id" | "packageId">;

// #region Response Model
type GetPackageOrdersResonseModel = Pagination<PackageOrder>;

type GetPackageOrderResponseModel = PackageOrder;

type CreatePackageOrderResponseModel = PackageOrder;

type UpdatePackageOrderResponseModel = PackageOrder;

type DeletePackageOrderResponseModel = PackageOrder;

export type {
  CreatePackageOrderRequestModel,
  UpdatePackageOrderRequestModel,
  GetPackageOrderResponseModel,
  GetPackageOrdersResonseModel,
  CreatePackageOrderResponseModel,
  UpdatePackageOrderResponseModel,
  DeletePackageOrderResponseModel,
};
