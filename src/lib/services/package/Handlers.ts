"use server";

import {
  getPackagesEndpoint,
  getPackageEndpoint,
  createPackageEndpoint,
  updatePackageEndpoint,
  deletePackageEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreatePackageRequestModel,
  UpdatePackageRequestModel,
  GetPackagesResonseModel,
  GetPackageResponseModel,
  CreatePackageResponseModel,
  UpdatePackageResponseModel,
  DeletePackageResponseModel,
} from "./Models";
import { createPackageSchema, updatePackageSchema } from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";

const GetPackagesRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetPackagesResonseModel>> => {
  return BaseRequestHandler<object, GetPackagesResonseModel>({
    options: {
      method: "GET",
      endpoint: getPackagesEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetPackageRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetPackageResponseModel>> => {
  return BaseRequestHandler<object, GetPackageResponseModel>({
    options: {
      method: "GET",
      endpoint: getPackageEndpoint(id),
    },
  });
};

const CreatePackageRequestHandler = async (
  prevState: BaseResponse<CreatePackageResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreatePackageResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreatePackageRequestModel,
    CreatePackageResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createPackageEndpoint,
      schema: createPackageSchema,
      accessToken: accessToken,
    },
  });
};

const UpdatePackageRequestHandler = async (
  prevState: BaseResponse<UpdatePackageResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdatePackageResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdatePackageRequestModel,
    UpdatePackageResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updatePackageEndpoint,
      schema: updatePackageSchema,
      accessToken: accessToken,
    },
  });
};

const DeletePackageRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeletePackageResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeletePackageResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deletePackageEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetPackagesRequestHandler,
  GetPackageRequestHandler,
  CreatePackageRequestHandler,
  UpdatePackageRequestHandler,
  DeletePackageRequestHandler,
};
