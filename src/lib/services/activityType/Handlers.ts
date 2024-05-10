"use server";

import {
  getActivityTypesEndpoint,
  getActivityTypeEndpoint,
  createActivityTypeEndpoint,
  updateActivityTypeEndpoint,
  deleteActivityTypeEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateActivityTypeRequestModel,
  UpdateActivityTypeRequestModel,
  GetActivityTypesResonseModel,
  GetActivityTypeResponseModel,
  CreateActivityTypeResponseModel,
  UpdateActivityTypeResponseModel,
  DeleteActivityTypeResponseModel,
} from "./Models";
import {
  createActivityTypeSchema,
  updateActivityTypeSchema,
} from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";
import { revalidatePath } from "next/cache";

const GetActivityTypesRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetActivityTypesResonseModel>> => {
  return BaseRequestHandler<object, GetActivityTypesResonseModel>({
    options: {
      method: "GET",
      endpoint: getActivityTypesEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetActivityTypeRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetActivityTypeResponseModel>> => {
  return BaseRequestHandler<object, GetActivityTypeResponseModel>({
    options: {
      method: "GET",
      endpoint: getActivityTypeEndpoint(id),
    },
  });
};

const CreateActivityTypeRequestHandler = async (
  prevState: BaseResponse<CreateActivityTypeResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateActivityTypeResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateActivityTypeRequestModel,
    CreateActivityTypeResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createActivityTypeEndpoint,
      schema: createActivityTypeSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateActivityTypeRequestHandler = async (
  prevState: BaseResponse<UpdateActivityTypeResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateActivityTypeResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateActivityTypeRequestModel,
    UpdateActivityTypeResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateActivityTypeEndpoint,
      schema: updateActivityTypeSchema,
      accessToken: accessToken,
    },
  });
};

const DeleteActivityTypeRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteActivityTypeResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteActivityTypeResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteActivityTypeEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetActivityTypesRequestHandler,
  GetActivityTypeRequestHandler,
  CreateActivityTypeRequestHandler,
  UpdateActivityTypeRequestHandler,
  DeleteActivityTypeRequestHandler,
};
