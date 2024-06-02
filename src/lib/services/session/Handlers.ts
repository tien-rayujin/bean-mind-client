"use server";

import {
  getSessionsEndpoint,
  getSessionEndpoint,
  createSessionEndpoint,
  updateSessionEndpoint,
  deleteSessionEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateSessionRequestModel,
  UpdateSessionRequestModel,
  GetSessionsResonseModel,
  GetSessionResponseModel,
  CreateSessionResponseModel,
  UpdateSessionResponseModel,
  DeleteSessionResponseModel,
} from "./Models";
import { createSessionSchema, updateSessionSchema } from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";
import { revalidatePath } from "next/cache";

const GetSessionsRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetSessionsResonseModel>> => {
  return BaseRequestHandler<object, GetSessionsResonseModel>({
    options: {
      method: "GET",
      endpoint: getSessionsEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetSessionRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetSessionResponseModel>> => {
  return BaseRequestHandler<object, GetSessionResponseModel>({
    options: {
      method: "GET",
      endpoint: getSessionEndpoint(id),
    },
  });
};

const CreateSessionRequestHandler = async (
  prevState: BaseResponse<CreateSessionResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateSessionResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateSessionRequestModel,
    CreateSessionResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createSessionEndpoint,
      schema: createSessionSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateSessionRequestHandler = async (
  prevState: BaseResponse<UpdateSessionResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateSessionResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateSessionRequestModel,
    UpdateSessionResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateSessionEndpoint,
      schema: updateSessionSchema,
      accessToken: accessToken,
    },
    // okCallback: () => {
    //   revalidatePath("/manage/session");
    //   revalidatePath("/manage/session/[id]", "layout");
    //   revalidatePath("/manage/session/[id]", "page");
    // },
  });
};

const DeleteSessionRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteSessionResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteSessionResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteSessionEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetSessionsRequestHandler,
  GetSessionRequestHandler,
  CreateSessionRequestHandler,
  UpdateSessionRequestHandler,
  DeleteSessionRequestHandler,
};
