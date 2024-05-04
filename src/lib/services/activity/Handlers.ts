"use server";

import {
  getActivitiesEndpoint,
  getActivityEndpoint,
  createActivityEndpoint,
  updateActivityEndpoint,
  deleteActivityEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateActivityRequestModel,
  UpdateActivityRequestModel,
  GetActivitiesResonseModel,
  GetActivityResponseModel,
  CreateActivityResponseModel,
  UpdateActivityResponseModel,
  DeleteActivityResponseModel,
} from "./Models";
import { createActivitySchema, updateActivitySchema } from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";

const GetActivitiesRequestHandler = async (
  formData: FormData,
): Promise<BaseResponse<GetActivitiesResonseModel>> => {
  return BaseRequestHandler<object, GetActivitiesResonseModel>({
    formData,
    options: {
      method: "GET",
      endpoint: getActivitiesEndpoint,
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetActivityRequestHandler = async (
  id: string,
  formData: FormData,
): Promise<BaseResponse<GetActivityResponseModel>> => {
  return BaseRequestHandler<object, GetActivityResponseModel>({
    formData,
    options: {
      method: "GET",
      endpoint: getActivityEndpoint(id),
    },
  });
};

const CreateActivityRequestHandler = async (
  prevState: BaseResponse<CreateActivityResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateActivityResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      isSuccess: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateActivityRequestModel,
    CreateActivityResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createActivityEndpoint,
      schema: createActivitySchema,
      accessToken: accessToken,
    },
  });
};

const UpdateActivityRequestHandler = async (
  prevState: BaseResponse<UpdateActivityResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateActivityResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      isSuccess: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateActivityRequestModel,
    UpdateActivityResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateActivityEndpoint,
      schema: updateActivitySchema,
      accessToken: accessToken,
    },
  });
};

const DeleteActivityRequestHandler = async (
  id: string,
  formData: FormData,
): Promise<BaseResponse<DeleteActivityResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      isSuccess: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteActivityResponseModel>({
    formData,
    options: {
      method: "GET",
      endpoint: deleteActivityEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetActivitiesRequestHandler,
  GetActivityRequestHandler,
  CreateActivityRequestHandler,
  UpdateActivityRequestHandler,
  DeleteActivityRequestHandler,
};
