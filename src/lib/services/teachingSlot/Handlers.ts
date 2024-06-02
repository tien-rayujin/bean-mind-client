"use server";

import {
  getTeachingSlotsEndpoint,
  getTeachingSlotEndpoint,
  createTeachingSlotEndpoint,
  updateTeachingSlotEndpoint,
  deleteTeachingSlotEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateTeachingSlotRequestModel,
  UpdateTeachingSlotRequestModel,
  GetTeachingSlotsResonseModel,
  GetTeachingSlotResponseModel,
  CreateTeachingSlotResponseModel,
  UpdateTeachingSlotResponseModel,
  DeleteTeachingSlotResponseModel,
} from "./Models";
import {
  createTeachingSlotSchema,
  updateTeachingSlotSchema,
} from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";
import { revalidatePath } from "next/cache";

const GetTeachingSlotsRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetTeachingSlotsResonseModel>> => {
  return BaseRequestHandler<object, GetTeachingSlotsResonseModel>({
    options: {
      method: "GET",
      endpoint: getTeachingSlotsEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetTeachingSlotRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetTeachingSlotResponseModel>> => {
  return BaseRequestHandler<object, GetTeachingSlotResponseModel>({
    options: {
      method: "GET",
      endpoint: getTeachingSlotEndpoint(id),
    },
  });
};

const CreateTeachingSlotRequestHandler = async (
  prevState: BaseResponse<CreateTeachingSlotResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateTeachingSlotResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateTeachingSlotRequestModel,
    CreateTeachingSlotResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createTeachingSlotEndpoint,
      schema: createTeachingSlotSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateTeachingSlotRequestHandler = async (
  prevState: BaseResponse<UpdateTeachingSlotResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateTeachingSlotResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateTeachingSlotRequestModel,
    UpdateTeachingSlotResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateTeachingSlotEndpoint,
      schema: updateTeachingSlotSchema,
      accessToken: accessToken,
    },
    // okCallback: () => {
    //   revalidatePath("/manage/teachingslot");
    //   revalidatePath("/manage/teachingslot/[id]", "layout");
    //   revalidatePath("/manage/teachingslot/[id]", "page");
    // },
  });
};

const DeleteTeachingSlotRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteTeachingSlotResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteTeachingSlotResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteTeachingSlotEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetTeachingSlotsRequestHandler,
  GetTeachingSlotRequestHandler,
  CreateTeachingSlotRequestHandler,
  UpdateTeachingSlotRequestHandler,
  DeleteTeachingSlotRequestHandler,
};
