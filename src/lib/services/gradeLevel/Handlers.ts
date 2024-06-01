"use server";

import {
  getGradeLevelsEndpoint,
  getGradeLevelEndpoint,
  createGradeLevelEndpoint,
  updateGradeLevelEndpoint,
  deleteGradeLevelEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateGradeLevelRequestModel,
  UpdateGradeLevelRequestModel,
  GetGradeLevelsResonseModel,
  GetGradeLevelResponseModel,
  CreateGradeLevelResponseModel,
  UpdateGradeLevelResponseModel,
  DeleteGradeLevelResponseModel,
} from "./Models";
import { createGradeLevelSchema, updateGradeLevelSchema } from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";
import { revalidatePath } from "next/cache";

const GetGradeLevelsRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetGradeLevelsResonseModel>> => {
  return BaseRequestHandler<object, GetGradeLevelsResonseModel>({
    options: {
      method: "GET",
      endpoint: getGradeLevelsEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetGradeLevelRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetGradeLevelResponseModel>> => {
  return BaseRequestHandler<object, GetGradeLevelResponseModel>({
    options: {
      method: "GET",
      endpoint: getGradeLevelEndpoint(id),
    },
  });
};

const CreateGradeLevelRequestHandler = async (
  prevState: BaseResponse<CreateGradeLevelResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateGradeLevelResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateGradeLevelRequestModel,
    CreateGradeLevelResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createGradeLevelEndpoint,
      schema: createGradeLevelSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateGradeLevelRequestHandler = async (
  prevState: BaseResponse<UpdateGradeLevelResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateGradeLevelResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateGradeLevelRequestModel,
    UpdateGradeLevelResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateGradeLevelEndpoint,
      schema: updateGradeLevelSchema,
      accessToken: accessToken,
    },
  });
};

const DeleteGradeLevelRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteGradeLevelResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteGradeLevelResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteGradeLevelEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetGradeLevelsRequestHandler,
  GetGradeLevelRequestHandler,
  CreateGradeLevelRequestHandler,
  UpdateGradeLevelRequestHandler,
  DeleteGradeLevelRequestHandler,
};
