"use server";

import {
  getWorksheetQuestionEndpoint,
  createWorksheetQuestionEndpoint,
  updateWorksheetQuestionEndpoint,
  deleteWorksheetQuestionEndpoint,
  getWorksheetQuestionsEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateWorksheetQuestionRequestModel,
  UpdateWorksheetQuestionRequestModel,
  GetActivitiesResonseModel,
  GetWorksheetQuestionResponseModel,
  CreateWorksheetQuestionResponseModel,
  UpdateWorksheetQuestionResponseModel,
  DeleteWorksheetQuestionResponseModel,
} from "./Models";
import {
  createWorksheetQuestionSchema,
  updateWorksheetQuestionSchema,
} from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";

const GetWorksheetQuestionsRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetActivitiesResonseModel>> => {
  return BaseRequestHandler<object, GetActivitiesResonseModel>({
    options: {
      method: "GET",
      endpoint: getWorksheetQuestionsEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetWorksheetQuestionRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetWorksheetQuestionResponseModel>> => {
  return BaseRequestHandler<object, GetWorksheetQuestionResponseModel>({
    options: {
      method: "GET",
      endpoint: getWorksheetQuestionEndpoint(id),
    },
  });
};

const CreateWorksheetQuestionRequestHandler = async (
  prevState: BaseResponse<CreateWorksheetQuestionResponseModel>,
  formData: CreateWorksheetQuestionRequestModel,
): Promise<BaseResponse<CreateWorksheetQuestionResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateWorksheetQuestionRequestModel,
    CreateWorksheetQuestionResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createWorksheetQuestionEndpoint,
      schema: createWorksheetQuestionSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateWorksheetQuestionRequestHandler = async (
  prevState: BaseResponse<UpdateWorksheetQuestionResponseModel>,
  formData: Object,
): Promise<BaseResponse<UpdateWorksheetQuestionResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  console.log("must run");

  return BaseRequestHandler<
    UpdateWorksheetQuestionRequestModel,
    UpdateWorksheetQuestionResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateWorksheetQuestionEndpoint,
      schema: updateWorksheetQuestionSchema,
      accessToken: accessToken,
    },
  });
};

const DeleteWorksheetQuestionRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteWorksheetQuestionResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteWorksheetQuestionResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteWorksheetQuestionEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetWorksheetQuestionsRequestHandler,
  GetWorksheetQuestionRequestHandler,
  CreateWorksheetQuestionRequestHandler,
  UpdateWorksheetQuestionRequestHandler,
  DeleteWorksheetQuestionRequestHandler,
};
