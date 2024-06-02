"use server";

import {
  getCoursePackagesEndpoint,
  getCoursePackageEndpoint,
  createCoursePackageEndpoint,
  updateCoursePackageEndpoint,
  deleteCoursePackageEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateCoursePackageRequestModel,
  UpdateCoursePackageRequestModel,
  GetCoursePackagesResonseModel,
  GetCoursePackageResponseModel,
  CreateCoursePackageResponseModel,
  UpdateCoursePackageResponseModel,
  DeleteCoursePackageResponseModel,
} from "./Models";
import {
  createCoursePackageSchema,
  updateCoursePackageSchema,
} from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";
import { revalidatePath } from "next/cache";

const GetCoursePackagesRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetCoursePackagesResonseModel>> => {
  return BaseRequestHandler<object, GetCoursePackagesResonseModel>({
    options: {
      method: "GET",
      endpoint: getCoursePackagesEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetCoursePackageRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetCoursePackageResponseModel>> => {
  return BaseRequestHandler<object, GetCoursePackageResponseModel>({
    options: {
      method: "GET",
      endpoint: getCoursePackageEndpoint(id),
    },
  });
};

const CreateCoursePackageRequestHandler = async (
  prevState: BaseResponse<CreateCoursePackageResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateCoursePackageResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateCoursePackageRequestModel,
    CreateCoursePackageResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createCoursePackageEndpoint,
      schema: createCoursePackageSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateCoursePackageRequestHandler = async (
  prevState: BaseResponse<UpdateCoursePackageResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateCoursePackageResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateCoursePackageRequestModel,
    UpdateCoursePackageResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateCoursePackageEndpoint,
      schema: updateCoursePackageSchema,
      accessToken: accessToken,
    },
    // okCallback: () => {
    //   revalidatePath("/manage/coursepackage");
    //   revalidatePath("/manage/coursepackage/[id]", "layout");
    //   revalidatePath("/manage/coursepackage/[id]", "page");
    // },
  });
};

const DeleteCoursePackageRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteCoursePackageResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteCoursePackageResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteCoursePackageEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetCoursePackagesRequestHandler,
  GetCoursePackageRequestHandler,
  CreateCoursePackageRequestHandler,
  UpdateCoursePackageRequestHandler,
  DeleteCoursePackageRequestHandler,
};
