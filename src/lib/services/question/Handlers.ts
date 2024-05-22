"use server";

import {
  getQuestionsEndpoint,
  getQuestionEndpoint,
  createQuestionEndpoint,
  updateQuestionEndpoint,
  deleteQuestionEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateQuestionRequestModel,
  UpdateQuestionRequestModel,
  GetQuestionsResonseModel,
  GetQuestionResponseModel,
  CreateQuestionResponseModel,
  UpdateQuestionResponseModel,
  DeleteQuestionResponseModel,
} from "./Models";
import { createQuestionSchema, updateQuestionSchema } from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";
import {
  CreateQuestionAnswerRequestModel,
  UpdateQuestionAnswerRequestModel,
} from "../questionAnswer/Models";
import {
  CreateQuestionAnswerRequestHandler,
  UpdateQuestionAnswerRequestHandler,
} from "../questionAnswer/Handlers";

const GetQuestionsRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetQuestionsResonseModel>> => {
  return BaseRequestHandler<object, GetQuestionsResonseModel>({
    options: {
      method: "GET",
      endpoint: getQuestionsEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetQuestionRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetQuestionResponseModel>> => {
  return BaseRequestHandler<object, GetQuestionResponseModel>({
    options: {
      method: "GET",
      endpoint: getQuestionEndpoint(id),
    },
  });
};

const CreateQuestionRequestHandler = async (
  prevState: BaseResponse<CreateQuestionResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateQuestionResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateQuestionRequestModel,
    CreateQuestionResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createQuestionEndpoint,
      schema: createQuestionSchema,
      accessToken: accessToken,
    },
  });
};

const CreateQuestionRequestHandlerWithAnsList = async (
  ansList: CreateQuestionAnswerRequestModel[],
  prevState: BaseResponse<CreateQuestionResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateQuestionResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  console.log({ formData, ansList });

  return BaseRequestHandler<
    CreateQuestionRequestModel,
    CreateQuestionResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createQuestionEndpoint,
      schema: createQuestionSchema,
      accessToken: accessToken,
    },
    okCallback: async (modelResult) => {
      if (!modelResult) {
        throw new Error("Some thing happen, create question failed");
      }

      const ansListMapped = ansList.map((ans) => {
        return {
          ...ans,
          questionId: modelResult.id,
        };
      });

      await Promise.all(
        ansListMapped.map((ans, idx) => {
          return CreateQuestionAnswerRequestHandler(
            {
              success: false,
              message: "",
            },
            ans,
          );
        }),
      );

      console.log("Done");
    },
  });
};

const UpdateQuestionRequestHandler = async (
  prevState: BaseResponse<UpdateQuestionResponseModel>,
  formData: Object,
): Promise<BaseResponse<UpdateQuestionResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateQuestionRequestModel,
    UpdateQuestionResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateQuestionEndpoint,
      schema: updateQuestionSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateQuestionRequestHandlerWithAnsList = async (
  ansList: UpdateQuestionAnswerRequestModel[],
  prevState: BaseResponse<UpdateQuestionResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateQuestionResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateQuestionRequestModel,
    UpdateQuestionResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateQuestionEndpoint,
      schema: updateQuestionSchema,
      accessToken: accessToken,
    },
    okCallback: async (modelResult) => {
      if (!modelResult) {
        throw new Error("Some thing happen, update question failed");
      }

      const ansListMapped = ansList.map((ans) => {
        return {
          ...ans,
          questionId: modelResult.id,
        };
      });

      await Promise.all(
        ansListMapped.map((ans, idx) => {
          // if the answer is existed then perform update for each
          if (ans.id) {
            return UpdateQuestionAnswerRequestHandler(
              {
                success: false,
                message: "",
              },
              ans,
            );
          } else {
            // if not the create new one
            return CreateQuestionAnswerRequestHandler(
              {
                success: false,
                message: "",
              },
              ans,
            );
          }
        }),
      );

      console.log("Done");
    },
  });
};

const DeleteQuestionRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteQuestionResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteQuestionResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteQuestionEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetQuestionsRequestHandler,
  GetQuestionRequestHandler,
  CreateQuestionRequestHandler,
  CreateQuestionRequestHandlerWithAnsList,
  UpdateQuestionRequestHandler,
  UpdateQuestionRequestHandlerWithAnsList,
  DeleteQuestionRequestHandler,
};
