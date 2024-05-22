"use server";

import {
  getTopicsEndpoint,
  getTopicEndpoint,
  createTopicEndpoint,
  updateTopicEndpoint,
  deleteTopicEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateTopicRequestModel,
  UpdateTopicRequestModel,
  GetTopicsResonseModel,
  GetTopicResponseModel,
  CreateTopicResponseModel,
  UpdateTopicResponseModel,
  DeleteTopicResponseModel,
} from "./Models";
import { createTopicSchema, updateTopicSchema } from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";
import { revalidatePath } from "next/cache";

const GetTopicsRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetTopicsResonseModel>> => {
  return BaseRequestHandler<object, GetTopicsResonseModel>({
    options: {
      method: "GET",
      endpoint: getTopicsEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetTopicRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetTopicResponseModel>> => {
  return BaseRequestHandler<object, GetTopicResponseModel>({
    options: {
      method: "GET",
      endpoint: getTopicEndpoint(id),
    },
  });
};

const CreateTopicRequestHandler = async (
  prevState: BaseResponse<CreateTopicResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateTopicResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<CreateTopicRequestModel, CreateTopicResponseModel>({
    formData,
    options: {
      method: "POST",
      endpoint: createTopicEndpoint,
      schema: createTopicSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateTopicRequestHandler = async (
  prevState: BaseResponse<UpdateTopicResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateTopicResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<UpdateTopicRequestModel, UpdateTopicResponseModel>({
    formData,
    options: {
      method: "PUT",
      endpoint: updateTopicEndpoint,
      schema: updateTopicSchema,
      accessToken: accessToken,
    },
    // okCallback: () => {
    //   revalidatePath("/manage/topic");
    //   revalidatePath("/manage/topic/[id]", "layout");
    //   revalidatePath("/manage/topic/[id]", "page");
    // },
  });
};

const DeleteTopicRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteTopicResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteTopicResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteTopicEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetTopicsRequestHandler,
  GetTopicRequestHandler,
  CreateTopicRequestHandler,
  UpdateTopicRequestHandler,
  DeleteTopicRequestHandler,
};
