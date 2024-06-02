"use server";

import {
  getPackageOrdersEndpoint,
  getPackageOrderEndpoint,
  createPackageOrderEndpoint,
  updatePackageOrderEndpoint,
  deletePackageOrderEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreatePackageOrderRequestModel,
  UpdatePackageOrderRequestModel,
  GetPackageOrdersResonseModel,
  GetPackageOrderResponseModel,
  CreatePackageOrderResponseModel,
  UpdatePackageOrderResponseModel,
  DeletePackageOrderResponseModel,
} from "./Models";
import {
  createPackageOrderSchema,
  updatePackageOrderSchema,
} from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";
import { revalidatePath } from "next/cache";

const GetPackageOrdersRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetPackageOrdersResonseModel>> => {
  return BaseRequestHandler<object, GetPackageOrdersResonseModel>({
    options: {
      method: "GET",
      endpoint: getPackageOrdersEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetPackageOrderRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetPackageOrderResponseModel>> => {
  return BaseRequestHandler<object, GetPackageOrderResponseModel>({
    options: {
      method: "GET",
      endpoint: getPackageOrderEndpoint(id),
    },
  });
};

const CreatePackageOrderRequestHandler = async (
  prevState: BaseResponse<CreatePackageOrderResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreatePackageOrderResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreatePackageOrderRequestModel,
    CreatePackageOrderResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createPackageOrderEndpoint,
      schema: createPackageOrderSchema,
      accessToken: accessToken,
    },
  });
};

const UpdatePackageOrderRequestHandler = async (
  prevState: BaseResponse<UpdatePackageOrderResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdatePackageOrderResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdatePackageOrderRequestModel,
    UpdatePackageOrderResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updatePackageOrderEndpoint,
      schema: updatePackageOrderSchema,
      accessToken: accessToken,
    },
    // okCallback: () => {
    //   revalidatePath("/manage/packageorder");
    //   revalidatePath("/manage/packageorder/[id]", "layout");
    //   revalidatePath("/manage/packageorder/[id]", "page");
    // },
  });
};

const DeletePackageOrderRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeletePackageOrderResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeletePackageOrderResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deletePackageOrderEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetPackageOrdersRequestHandler,
  GetPackageOrderRequestHandler,
  CreatePackageOrderRequestHandler,
  UpdatePackageOrderRequestHandler,
  DeletePackageOrderRequestHandler,
};
