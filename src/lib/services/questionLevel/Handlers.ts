"use server";

import {
  getQuestionLevelsEndpoint,
  getQuestionLevelEndpoint,
  createQuestionLevelEndpoint,
  updateQuestionLevelEndpoint,
  deleteQuestionLevelEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateQuestionLevelRequestModel,
  UpdateQuestionLevelRequestModel,
  GetQuestionLevelsResonseModel,
  GetQuestionLevelResponseModel,
  CreateQuestionLevelResponseModel,
  UpdateQuestionLevelResponseModel,
  DeleteQuestionLevelResponseModel,
} from "./Models";
import {
  createQuestionLevelSchema,
  updateQuestionLevelSchema,
} from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";
import { revalidatePath } from "next/cache";

const GetQuestionLevelsRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetQuestionLevelsResonseModel>> => {
  return BaseRequestHandler<object, GetQuestionLevelsResonseModel>({
    options: {
      method: "GET",
      endpoint: getQuestionLevelsEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetQuestionLevelRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetQuestionLevelResponseModel>> => {
  return BaseRequestHandler<object, GetQuestionLevelResponseModel>({
    options: {
      method: "GET",
      endpoint: getQuestionLevelEndpoint(id),
    },
  });
};

const CreateQuestionLevelRequestHandler = async (
  prevState: BaseResponse<CreateQuestionLevelResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateQuestionLevelResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateQuestionLevelRequestModel,
    CreateQuestionLevelResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createQuestionLevelEndpoint,
      schema: createQuestionLevelSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateQuestionLevelRequestHandler = async (
  prevState: BaseResponse<UpdateQuestionLevelResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateQuestionLevelResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateQuestionLevelRequestModel,
    UpdateQuestionLevelResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateQuestionLevelEndpoint,
      schema: updateQuestionLevelSchema,
      accessToken: accessToken,
    },
  });
};

const DeleteQuestionLevelRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteQuestionLevelResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteQuestionLevelResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteQuestionLevelEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetQuestionLevelsRequestHandler,
  GetQuestionLevelRequestHandler,
  CreateQuestionLevelRequestHandler,
  UpdateQuestionLevelRequestHandler,
  DeleteQuestionLevelRequestHandler,
};
