"use server";

import {
  getWorksheetEndpoint,
  createWorksheetEndpoint,
  updateWorksheetEndpoint,
  deleteWorksheetEndpoint,
  getWorksheetsEndpoint,
} from "@/lib/services/Endpoints";
import {
  CreateWorksheetRequestModel,
  UpdateWorksheetRequestModel,
  GetActivitiesResonseModel,
  GetWorksheetResponseModel,
  CreateWorksheetResponseModel,
  UpdateWorksheetResponseModel,
  DeleteWorksheetResponseModel,
} from "./Models";
import { createWorksheetSchema, updateWorksheetSchema } from "./Validators";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";
import { getAccessTokenSession } from "@/lib/actions/session";
import { CreateWorksheetQuestionRequestModel } from "../worksheetQuestion/Models";
import {
  CreateWorksheetQuestionRequestHandler,
  DeleteWorksheetQuestionRequestHandler,
} from "../worksheetQuestion/Handlers";

const GetWorksheetsRequestHandler = async (
  query: Object,
): Promise<BaseResponse<GetActivitiesResonseModel>> => {
  return BaseRequestHandler<object, GetActivitiesResonseModel>({
    options: {
      method: "GET",
      endpoint: getWorksheetsEndpoint(query),
    },
  });
};

// use bind to catch it Fn.bind(null, id)
const GetWorksheetRequestHandler = async (
  id: string,
): Promise<BaseResponse<GetWorksheetResponseModel>> => {
  return BaseRequestHandler<object, GetWorksheetResponseModel>({
    options: {
      method: "GET",
      endpoint: getWorksheetEndpoint(id),
    },
  });
};

const CreateWorksheetRequestHandler = async (
  prevState: BaseResponse<CreateWorksheetResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateWorksheetResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateWorksheetRequestModel,
    CreateWorksheetResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createWorksheetEndpoint,
      schema: createWorksheetSchema,
      accessToken: accessToken,
    },
  });
};

const CreateWorksheetRequestHandlerWithQuestionList = async (
  questionList: Set<string>,
  prevState: BaseResponse<CreateWorksheetResponseModel>,
  formData: FormData,
): Promise<BaseResponse<CreateWorksheetResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    CreateWorksheetRequestModel,
    CreateWorksheetResponseModel
  >({
    formData,
    options: {
      method: "POST",
      endpoint: createWorksheetEndpoint,
      schema: createWorksheetSchema,
      accessToken: accessToken,
    },
    okCallback: async (modelResult) => {
      if (!modelResult) {
        throw new Error("Some thing happen, create worksheet failed");
      }

      const questionListMapped: CreateWorksheetQuestionRequestModel[] =
        Array.from(questionList).map((questionId) => {
          return {
            questionId: questionId,
            worksheetId: modelResult.id,
          };
        });

      await Promise.all(
        questionListMapped.map((question, idx) => {
          return CreateWorksheetQuestionRequestHandler(
            {
              success: false,
              message: "",
            },
            question,
          );
        }),
      );

      console.log("Create Worksheet and Assign WorksheetQuestion Done");
    },
  });
};

const UpdateWorksheetRequestHandler = async (
  prevState: BaseResponse<UpdateWorksheetResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateWorksheetResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateWorksheetRequestModel,
    UpdateWorksheetResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateWorksheetEndpoint,
      schema: updateWorksheetSchema,
      accessToken: accessToken,
    },
  });
};

const UpdateWorksheetRequestHandlerWithQuestionList = async (
  questionList: Set<string>,
  worksheetQuestions: WorksheetQuestion[], // old
  prevState: BaseResponse<UpdateWorksheetResponseModel>,
  formData: FormData,
): Promise<BaseResponse<UpdateWorksheetResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<
    UpdateWorksheetRequestModel,
    UpdateWorksheetResponseModel
  >({
    formData,
    options: {
      method: "PUT",
      endpoint: updateWorksheetEndpoint,
      schema: updateWorksheetSchema,
      accessToken: accessToken,
    },
    okCallback: async (modelResult) => {
      if (!modelResult) {
        throw new Error("Some thing happen, create worksheet failed");
      }

      const questionListMapped: CreateWorksheetQuestionRequestModel[] =
        Array.from(questionList).map((questionId) => {
          return {
            questionId: questionId,
            worksheetId: modelResult.id,
          };
        });

      console.log({ worksheetQuestions });
      console.log({ questionListMapped });

      try {
        await Promise.all([
          ...questionListMapped.map((nextWorksheetQuestion) => {
            // the oldList is empty => add this item (newList)
            // the oldList does not include this new item -> add this item (newList)
            if (
              worksheetQuestions.length === 0 ||
              !worksheetQuestions.find(
                (x) => x.questionId === nextWorksheetQuestion.questionId,
              )
            ) {
              console.log("oldList is length 0 or oldList not contain current");
              return CreateWorksheetQuestionRequestHandler(
                {
                  success: false,
                  message: "",
                },
                nextWorksheetQuestion,
              );
            }
          }),
          // delete unselected question
          ...worksheetQuestions.map((oldWorksheetQuestion) => {
            // the newList is empty -> remove all oldList
            // the item in oldList is not existed in newList -> remove item in oldList
            if (
              questionListMapped.length === 0 ||
              !questionListMapped.find(
                (x) => x.questionId === oldWorksheetQuestion.questionId,
              )
            ) {
              return DeleteWorksheetQuestionRequestHandler(
                oldWorksheetQuestion.id,
              );
            }
          }),
        ]);
      } catch (error) {
        console.error(error);
      }
      console.log("Create Worksheet and Assign WorksheetQuestion Done");
    },
  });
};

const DeleteWorksheetRequestHandler = async (
  id: string,
): Promise<BaseResponse<DeleteWorksheetResponseModel>> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<object, DeleteWorksheetResponseModel>({
    options: {
      method: "DELETE",
      endpoint: deleteWorksheetEndpoint(id),
      accessToken: accessToken,
    },
  });
};

export {
  GetWorksheetsRequestHandler,
  GetWorksheetRequestHandler,
  CreateWorksheetRequestHandler,
  UpdateWorksheetRequestHandler,
  DeleteWorksheetRequestHandler,
  CreateWorksheetRequestHandlerWithQuestionList,
  UpdateWorksheetRequestHandlerWithQuestionList,
};
