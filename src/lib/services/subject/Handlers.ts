"use server";

import {
  getSubjectsEndpoint,
  getSubjectEndpoint,
  createSubjectEndpoint,
  updateSubjectEndpoint,
  deleteSubjectEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateSubjectRequestModel,
  UpdateSubjectRequestModel,
  GetSubjectsResonseModel,
  GetSubjectResponseModel,
  CreateSubjectResponseModel,
  UpdateSubjectResponseModel,
  DeleteSubjectResponseModel,
} from "./Models";
import { createSubjectSchema, updateSubjectSchema } from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";

const GetSubjectsRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetSubjectsResonseModel>> => {
  return BaseRequestHandler<object, GetSubjectsResonseModel>({
    options: {
      method: "GET",
      endpoint: getSubjectsEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetSubjectRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetSubjectResponseModel>> => {
  return BaseRequestHandler<object, GetSubjectResponseModel>({
    options: {
      method: "GET",
      endpoint: getSubjectEndpoint(id),
    },
  });
};

const CreateSubjectRequestHandler = async (
  prevState: BaseResponse<CreateSubjectResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateSubjectResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateSubjectRequestModel,
    CreateSubjectResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createSubjectEndpoint,
      schema: createSubjectSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateSubjectRequestHandler = async (
  prevState: BaseResponse<UpdateSubjectResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateSubjectResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateSubjectRequestModel,
    UpdateSubjectResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateSubjectEndpoint,
      schema: updateSubjectSchema,
      accessToken: accessToken,
    },
  });
};

const DeleteSubjectRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteSubjectResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteSubjectResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteSubjectEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetSubjectsRequestHandler,
  GetSubjectRequestHandler,
  CreateSubjectRequestHandler,
  UpdateSubjectRequestHandler,
  DeleteSubjectRequestHandler,
};
