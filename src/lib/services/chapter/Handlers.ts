"use server";

import {
  getChaptersEndpoint,
  getChapterEndpoint,
  createChapterEndpoint,
  updateChapterEndpoint,
  deleteChapterEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateChapterRequestModel,
  UpdateChapterRequestModel,
  GetChaptersResonseModel,
  GetChapterResponseModel,
  CreateChapterResponseModel,
  UpdateChapterResponseModel,
  DeleteChapterResponseModel,
} from "./Models";
import { createChapterSchema, updateChapterSchema } from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";

const GetChaptersRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetChaptersResonseModel>> => {
  return BaseRequestHandler<object, GetChaptersResonseModel>({
    options: {
      method: "GET",
      endpoint: getChaptersEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetChapterRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetChapterResponseModel>> => {
  return BaseRequestHandler<object, GetChapterResponseModel>({
    options: {
      method: "GET",
      endpoint: getChapterEndpoint(id),
    },
  });
};

const CreateChapterRequestHandler = async (
  prevState: BaseResponse<CreateChapterResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateChapterResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateChapterRequestModel,
    CreateChapterResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createChapterEndpoint,
      schema: createChapterSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateChapterRequestHandler = async (
  prevState: BaseResponse<UpdateChapterResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateChapterResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateChapterRequestModel,
    UpdateChapterResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateChapterEndpoint,
      schema: updateChapterSchema,
      accessToken: accessToken,
    },
  });
};

const DeleteChapterRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteChapterResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteChapterResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteChapterEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetChaptersRequestHandler,
  GetChapterRequestHandler,
  CreateChapterRequestHandler,
  UpdateChapterRequestHandler,
  DeleteChapterRequestHandler,
};
