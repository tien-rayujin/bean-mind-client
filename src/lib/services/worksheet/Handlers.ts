"use server";

import {
  getWorksheetEndpoint,
  createWorksheetEndpoint,
  updateWorksheetEndpoint,
  deleteWorksheetEndpoint,
  getWorksheetsEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateWorksheetRequestModel,
  UpdateWorksheetRequestModel,
  GetActivitiesResonseModel,
  GetWorksheetResponseModel,
  CreateWorksheetResponseModel,
  UpdateWorksheetResponseModel,
  DeleteWorksheetResponseModel,
} from "./Models";
import { createWorksheetSchema, updateWorksheetSchema } from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";

const GetWorksheetsRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetActivitiesResonseModel>> => {
  return BaseRequestHandler<object, GetActivitiesResonseModel>({
    options: {
      method: "GET",
      endpoint: getWorksheetsEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetWorksheetRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetWorksheetResponseModel>> => {
  return BaseRequestHandler<object, GetWorksheetResponseModel>({
    options: {
      method: "GET",
      endpoint: getWorksheetEndpoint(id),
    },
  });
};

const CreateWorksheetRequestHandler = async (
  prevState: BaseResponse<CreateWorksheetResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateWorksheetResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateWorksheetRequestModel,
    CreateWorksheetResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createWorksheetEndpoint,
      schema: createWorksheetSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateWorksheetRequestHandler = async (
  prevState: BaseResponse<UpdateWorksheetResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateWorksheetResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateWorksheetRequestModel,
    UpdateWorksheetResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateWorksheetEndpoint,
      schema: updateWorksheetSchema,
      accessToken: accessToken,
    },
  });
};

const DeleteWorksheetRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteWorksheetResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteWorksheetResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteWorksheetEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetWorksheetsRequestHandler,
  GetWorksheetRequestHandler,
  CreateWorksheetRequestHandler,
  UpdateWorksheetRequestHandler,
  DeleteWorksheetRequestHandler,
};
