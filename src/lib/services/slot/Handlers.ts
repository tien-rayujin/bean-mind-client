"use server";

import {
  getSlotsEndpoint,
  getSlotEndpoint,
  createSlotEndpoint,
  updateSlotEndpoint,
  deleteSlotEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateSlotRequestModel,
  UpdateSlotRequestModel,
  GetSlotsResonseModel,
  GetSlotResponseModel,
  CreateSlotResponseModel,
  UpdateSlotResponseModel,
  DeleteSlotResponseModel,
} from "./Models";
import { createSlotSchema, updateSlotSchema } from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";
import { revalidatePath } from "next/cache";

const GetSlotsRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetSlotsResonseModel>> => {
  return BaseRequestHandler<object, GetSlotsResonseModel>({
    options: {
      method: "GET",
      endpoint: getSlotsEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetSlotRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetSlotResponseModel>> => {
  return BaseRequestHandler<object, GetSlotResponseModel>({
    options: {
      method: "GET",
      endpoint: getSlotEndpoint(id),
    },
  });
};

const CreateSlotRequestHandler = async (
  prevState: BaseResponse<CreateSlotResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateSlotResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<CreateSlotRequestModel, CreateSlotResponseModel>({
    formData,
    options: {
      method: "POST",
      endpoint: createSlotEndpoint,
      schema: createSlotSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateSlotRequestHandler = async (
  prevState: BaseResponse<UpdateSlotResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateSlotResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<UpdateSlotRequestModel, UpdateSlotResponseModel>({
    formData,
    options: {
      method: "PUT",
      endpoint: updateSlotEndpoint,
      schema: updateSlotSchema,
      accessToken: accessToken,
    },
    // okCallback: () => {
    //   revalidatePath("/manage/slot");
    //   revalidatePath("/manage/slot/[id]", "layout");
    //   revalidatePath("/manage/slot/[id]", "page");
    // },
  });
};

const DeleteSlotRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteSlotResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteSlotResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteSlotEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetSlotsRequestHandler,
  GetSlotRequestHandler,
  CreateSlotRequestHandler,
  UpdateSlotRequestHandler,
  DeleteSlotRequestHandler,
};
