"use server";

import {
  getCoursesEndpoint,
  getCourseEndpoint,
  createCourseEndpoint,
  updateCourseEndpoint,
  deleteCourseEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateCourseRequestModel,
  UpdateCourseRequestModel,
  GetCoursesResonseModel,
  GetCourseResponseModel,
  CreateCourseResponseModel,
  UpdateCourseResponseModel,
  DeleteCourseResponseModel,
} from "./Models";
import { createCourseSchema, updateCourseSchema } from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";

const GetCoursesRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetCoursesResonseModel>> => {
  return BaseRequestHandler<object, GetCoursesResonseModel>({
    options: {
      method: "GET",
      endpoint: getCoursesEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetCourseRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetCourseResponseModel>> => {
  return BaseRequestHandler<object, GetCourseResponseModel>({
    options: {
      method: "GET",
      endpoint: getCourseEndpoint(id),
    },
  });
};

const CreateCourseRequestHandler = async (
  prevState: BaseResponse<CreateCourseResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateCourseResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateCourseRequestModel,
    CreateCourseResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createCourseEndpoint,
      schema: createCourseSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateCourseRequestHandler = async (
  prevState: BaseResponse<UpdateCourseResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateCourseResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateCourseRequestModel,
    UpdateCourseResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateCourseEndpoint,
      schema: updateCourseSchema,
      accessToken: accessToken,
    },
  });
};

const DeleteCourseRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteCourseResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteCourseResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteCourseEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetCoursesRequestHandler,
  GetCourseRequestHandler,
  CreateCourseRequestHandler,
  UpdateCourseRequestHandler,
  DeleteCourseRequestHandler,
};
