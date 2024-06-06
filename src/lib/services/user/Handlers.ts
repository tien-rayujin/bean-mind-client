"use server";

import {
  getUsersEndpoint,
  getUserEndpoint,
  createUserEndpoint,
  updateUserEndpoint,
  deleteUserEndpoint,
  getUserInfoEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateUserRequestModel,
  UpdateUserRequestModel,
  GetUsersResonseModel,
  GetUserResponseModel,
  CreateUserResponseModel,
  UpdateUserResponseModel,
  DeleteUserResponseModel,
} from "./Models";
import { createUserSchema, updateUserSchema } from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";
import { revalidatePath } from "next/cache";

const GetUsersRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetUsersResonseModel>> => {
  return BaseRequestHandler<object, GetUsersResonseModel>({
    options: {
      method: "GET",
      endpoint: getUsersEndpoint(query),
    },
  });
};

const GetUserInfoRequestHandler = async (): Promise<
  BaseResponse<GetUserResponseModel>
> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, GetUserResponseModel>({
    options: {
      method: "GET",
      endpoint: getUserInfoEndpoint(),
      accessToken: accessToken,
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetUserRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetUserResponseModel>> => {
  return BaseRequestHandler<object, GetUserResponseModel>({
    options: {
      method: "GET",
      endpoint: getUserEndpoint(id),
    },
  });
};

const CreateUserRequestHandler = async (
  prevState: BaseResponse<CreateUserResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateUserResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<CreateUserRequestModel, CreateUserResponseModel>({
    formData,
    options: {
      method: "POST",
      endpoint: createUserEndpoint,
      schema: createUserSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateUserRequestHandler = async (
  prevState: BaseResponse<UpdateUserResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateUserResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<UpdateUserRequestModel, UpdateUserResponseModel>({
    formData,
    options: {
      method: "PUT",
      endpoint: updateUserEndpoint,
      schema: updateUserSchema,
      accessToken: accessToken,
    },
    // okCallback: () => {
    //   revalidatePath("/manage/user");
    //   revalidatePath("/manage/user/[id]", "layout");
    //   revalidatePath("/manage/user/[id]", "page");
    // },
  });
};

const DeleteUserRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteUserResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteUserResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteUserEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetUsersRequestHandler,
  GetUserRequestHandler,
  GetUserInfoRequestHandler,
  CreateUserRequestHandler,
  UpdateUserRequestHandler,
  DeleteUserRequestHandler,
};
