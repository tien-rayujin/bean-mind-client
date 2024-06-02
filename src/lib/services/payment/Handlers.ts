"use server";

import {
  getPaymentsEndpoint,
  getPaymentEndpoint,
  createPaymentEndpoint,
  updatePaymentEndpoint,
  deletePaymentEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreatePaymentRequestModel,
  UpdatePaymentRequestModel,
  GetPaymentsResonseModel,
  GetPaymentResponseModel,
  CreatePaymentResponseModel,
  UpdatePaymentResponseModel,
  DeletePaymentResponseModel,
} from "./Models";
import { createPaymentSchema, updatePaymentSchema } from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";
import { revalidatePath } from "next/cache";

const GetPaymentsRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetPaymentsResonseModel>> => {
  return BaseRequestHandler<object, GetPaymentsResonseModel>({
    options: {
      method: "GET",
      endpoint: getPaymentsEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetPaymentRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetPaymentResponseModel>> => {
  return BaseRequestHandler<object, GetPaymentResponseModel>({
    options: {
      method: "GET",
      endpoint: getPaymentEndpoint(id),
    },
  });
};

const CreatePaymentRequestHandler = async (
  prevState: BaseResponse<CreatePaymentResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreatePaymentResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreatePaymentRequestModel,
    CreatePaymentResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createPaymentEndpoint,
      schema: createPaymentSchema,
      accessToken: accessToken,
    },
  });
};

const UpdatePaymentRequestHandler = async (
  prevState: BaseResponse<UpdatePaymentResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdatePaymentResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdatePaymentRequestModel,
    UpdatePaymentResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updatePaymentEndpoint,
      schema: updatePaymentSchema,
      accessToken: accessToken,
    },
    // okCallback: () => {
    //   revalidatePath("/manage/payment");
    //   revalidatePath("/manage/payment/[id]", "layout");
    //   revalidatePath("/manage/payment/[id]", "page");
    // },
  });
};

const DeletePaymentRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeletePaymentResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeletePaymentResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deletePaymentEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetPaymentsRequestHandler,
  GetPaymentRequestHandler,
  CreatePaymentRequestHandler,
  UpdatePaymentRequestHandler,
  DeletePaymentRequestHandler,
};
