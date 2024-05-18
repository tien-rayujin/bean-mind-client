"use server";

import {
  getQuestionAnswersEndpoint,
  getQuestionAnswerEndpoint,
  createQuestionAnswerEndpoint,
  updateQuestionAnswerEndpoint,
  deleteQuestionAnswerEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateQuestionAnswerRequestModel,
  UpdateQuestionAnswerRequestModel,
  GetQuestionAnswersResonseModel,
  GetQuestionAnswerResponseModel,
  CreateQuestionAnswerResponseModel,
  UpdateQuestionAnswerResponseModel,
  DeleteQuestionAnswerResponseModel,
} from "./Models";
import {
  createQuestionAnswerSchema,
  updateQuestionAnswerSchema,
} from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";

const GetQuestionAnswersRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetQuestionAnswersResonseModel>> => {
  return BaseRequestHandler<object, GetQuestionAnswersResonseModel>({
    options: {
      method: "GET",
      endpoint: getQuestionAnswersEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetQuestionAnswerRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetQuestionAnswerResponseModel>> => {
  return BaseRequestHandler<object, GetQuestionAnswerResponseModel>({
    options: {
      method: "GET",
      endpoint: getQuestionAnswerEndpoint(id),
    },
  });
};

const CreateQuestionAnswerRequestHandler = async (
  prevState: BaseResponse<CreateQuestionAnswerResponseModel>,
  formData: Object,
): Promise<BaseResponse<CreateQuestionAnswerResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateQuestionAnswerRequestModel,
    CreateQuestionAnswerResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createQuestionAnswerEndpoint,
      schema: createQuestionAnswerSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateQuestionAnswerRequestHandler = async (
  prevState: BaseResponse<UpdateQuestionAnswerResponseModel>,
  formData: Object,
): Promise<BaseResponse<UpdateQuestionAnswerResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateQuestionAnswerRequestModel,
    UpdateQuestionAnswerResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateQuestionAnswerEndpoint,
      schema: updateQuestionAnswerSchema,
      accessToken: accessToken,
    },
  });
};

const DeleteQuestionAnswerRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteQuestionAnswerResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteQuestionAnswerResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteQuestionAnswerEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetQuestionAnswersRequestHandler,
  GetQuestionAnswerRequestHandler,
  CreateQuestionAnswerRequestHandler,
  UpdateQuestionAnswerRequestHandler,
  DeleteQuestionAnswerRequestHandler,
};
