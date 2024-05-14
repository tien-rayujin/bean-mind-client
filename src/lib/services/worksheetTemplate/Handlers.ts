"use server";

import {
  getWorksheetTemplatesEndpoint,
  getWorksheetTemplateEndpoint,
  createWorksheetTemplateEndpoint,
  updateWorksheetTemplateEndpoint,
  deleteWorksheetTemplateEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateWorksheetTemplateRequestModel,
  UpdateWorksheetTemplateRequestModel,
  GetWorksheetTemplatesResonseModel,
  GetWorksheetTemplateResponseModel,
  CreateWorksheetTemplateResponseModel,
  UpdateWorksheetTemplateResponseModel,
  DeleteWorksheetTemplateResponseModel,
} from "./Models";
import {
  createWorksheetTemplateSchema,
  updateWorksheetTemplateSchema,
} from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";

const GetWorksheetTemplatesRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetWorksheetTemplatesResonseModel>> => {
  return BaseRequestHandler<object, GetWorksheetTemplatesResonseModel>({
    options: {
      method: "GET",
      endpoint: getWorksheetTemplatesEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetWorksheetTemplateRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetWorksheetTemplateResponseModel>> => {
  return BaseRequestHandler<object, GetWorksheetTemplateResponseModel>({
    options: {
      method: "GET",
      endpoint: getWorksheetTemplateEndpoint(id),
    },
  });
};

const CreateWorksheetTemplateRequestHandler = async (
  prevState: BaseResponse<CreateWorksheetTemplateResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateWorksheetTemplateResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateWorksheetTemplateRequestModel,
    CreateWorksheetTemplateResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createWorksheetTemplateEndpoint,
      schema: createWorksheetTemplateSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateWorksheetTemplateRequestHandler = async (
  prevState: BaseResponse<UpdateWorksheetTemplateResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateWorksheetTemplateResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateWorksheetTemplateRequestModel,
    UpdateWorksheetTemplateResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateWorksheetTemplateEndpoint,
      schema: updateWorksheetTemplateSchema,
      accessToken: accessToken,
    },
  });
};

const DeleteWorksheetTemplateRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteWorksheetTemplateResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteWorksheetTemplateResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteWorksheetTemplateEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetWorksheetTemplatesRequestHandler,
  GetWorksheetTemplateRequestHandler,
  CreateWorksheetTemplateRequestHandler,
  UpdateWorksheetTemplateRequestHandler,
  DeleteWorksheetTemplateRequestHandler,
};
