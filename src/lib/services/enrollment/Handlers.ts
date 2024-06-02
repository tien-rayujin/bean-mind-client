"use server";

import {
  getEnrollmentsEndpoint,
  getEnrollmentEndpoint,
  createEnrollmentEndpoint,
  updateEnrollmentEndpoint,
  deleteEnrollmentEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateEnrollmentRequestModel,
  UpdateEnrollmentRequestModel,
  GetEnrollmentsResonseModel,
  GetEnrollmentResponseModel,
  CreateEnrollmentResponseModel,
  UpdateEnrollmentResponseModel,
  DeleteEnrollmentResponseModel,
} from "./Models";
import { createEnrollmentSchema, updateEnrollmentSchema } from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";
import { revalidatePath } from "next/cache";

const GetEnrollmentsRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetEnrollmentsResonseModel>> => {
  return BaseRequestHandler<object, GetEnrollmentsResonseModel>({
    options: {
      method: "GET",
      endpoint: getEnrollmentsEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetEnrollmentRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetEnrollmentResponseModel>> => {
  return BaseRequestHandler<object, GetEnrollmentResponseModel>({
    options: {
      method: "GET",
      endpoint: getEnrollmentEndpoint(id),
    },
  });
};

const CreateEnrollmentRequestHandler = async (
  prevState: BaseResponse<CreateEnrollmentResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateEnrollmentResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateEnrollmentRequestModel,
    CreateEnrollmentResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createEnrollmentEndpoint,
      schema: createEnrollmentSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateEnrollmentRequestHandler = async (
  prevState: BaseResponse<UpdateEnrollmentResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateEnrollmentResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateEnrollmentRequestModel,
    UpdateEnrollmentResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateEnrollmentEndpoint,
      schema: updateEnrollmentSchema,
      accessToken: accessToken,
    },
    // okCallback: () => {
    //   revalidatePath("/manage/enrollment");
    //   revalidatePath("/manage/enrollment/[id]", "layout");
    //   revalidatePath("/manage/enrollment/[id]", "page");
    // },
  });
};

const DeleteEnrollmentRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteEnrollmentResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteEnrollmentResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteEnrollmentEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetEnrollmentsRequestHandler,
  GetEnrollmentRequestHandler,
  CreateEnrollmentRequestHandler,
  UpdateEnrollmentRequestHandler,
  DeleteEnrollmentRequestHandler,
};
