import { Pagination } from "@/lib/common/Pagination";

// #region Request Model
type CreateUserRequestModel = Pick<
  AppUser,
  "email" | "phoneNumber" | "userName"
>;

type UpdateUserRequestModel = Pick<
  AppUser,
  "id" | "email" | "phoneNumber" | "userName"
>;

// #region Response Model
type GetUsersResonseModel = Pagination<AppUser>;

type GetUserResponseModel = AppUser;

type CreateUserResponseModel = AppUser;

type UpdateUserResponseModel = AppUser;

type DeleteUserResponseModel = AppUser;

export type {
  CreateUserRequestModel,
  UpdateUserRequestModel,
  GetUserResponseModel,
  GetUsersResonseModel,
  CreateUserResponseModel,
  UpdateUserResponseModel,
  DeleteUserResponseModel,
};
