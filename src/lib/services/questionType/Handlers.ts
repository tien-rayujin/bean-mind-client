"use server";

import {
  getQuestionTypesEndpoint,
  getQuestionTypeEndpoint,
  createQuestionTypeEndpoint,
  updateQuestionTypeEndpoint,
  deleteQuestionTypeEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateQuestionTypeRequestModel,
  UpdateQuestionTypeRequestModel,
  GetQuestionTypesResonseModel,
  GetQuestionTypeResponseModel,
  CreateQuestionTypeResponseModel,
  UpdateQuestionTypeResponseModel,
  DeleteQuestionTypeResponseModel,
} from "./Models";
import {
  createQuestionTypeSchema,
  updateQuestionTypeSchema,
} from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";
import { revalidatePath } from "next/cache";

const GetQuestionTypesRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetQuestionTypesResonseModel>> => {
  return BaseRequestHandler<object, GetQuestionTypesResonseModel>({
    options: {
      method: "GET",
      endpoint: getQuestionTypesEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetQuestionTypeRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetQuestionTypeResponseModel>> => {
  return BaseRequestHandler<object, GetQuestionTypeResponseModel>({
    options: {
      method: "GET",
      endpoint: getQuestionTypeEndpoint(id),
    },
  });
};

const CreateQuestionTypeRequestHandler = async (
  prevState: BaseResponse<CreateQuestionTypeResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateQuestionTypeResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateQuestionTypeRequestModel,
    CreateQuestionTypeResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createQuestionTypeEndpoint,
      schema: createQuestionTypeSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateQuestionTypeRequestHandler = async (
  prevState: BaseResponse<UpdateQuestionTypeResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateQuestionTypeResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateQuestionTypeRequestModel,
    UpdateQuestionTypeResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateQuestionTypeEndpoint,
      schema: updateQuestionTypeSchema,
      accessToken: accessToken,
    },
  });
};

const DeleteQuestionTypeRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteQuestionTypeResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteQuestionTypeResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteQuestionTypeEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetQuestionTypesRequestHandler,
  GetQuestionTypeRequestHandler,
  CreateQuestionTypeRequestHandler,
  UpdateQuestionTypeRequestHandler,
  DeleteQuestionTypeRequestHandler,
};
