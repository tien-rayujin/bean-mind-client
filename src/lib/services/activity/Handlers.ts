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
  query: Object,
): Promise<BaseResponse<GetActivitiesResonseModel>> => {
  return BaseRequestHandler<object, GetActivitiesResonseModel>({
    options: {
      method: "GET",
      endpoint: getActivitiesEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetActivityRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetActivityResponseModel>> => {
  return BaseRequestHandler<object, GetActivityResponseModel>({
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
      success: false,
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
      success: false,
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
): Promise<BaseResponse<DeleteActivityResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteActivityResponseModel>({
    options: {
      method: "DELETE",
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
