"use server";

import {
  confirmEmailRequestEndpoint,
  forgotPasswordRequestEndpoint,
  getUserInfoRequestEndpoint,
  loginRequestEndpoint,
  registerRequestEndpoint,
  resendConfirmEmailRequestEndpoint,
  resetPasswordRequestEndpoint,
} from "@/lib/services/auth/Endpoints";
import {
  ConfirmEmailRequestModel,
  ConfirmEmailResponseModel,
  ForgotPasswordRequestModel,
  ForgotPasswordResponseModel,
  GetUserInfoRequestModel,
  GetUserInfoResponseModel,
  LoginRequestModel,
  LoginResponseModel,
  RegisterRequestModel,
  RegisterResponseModel,
  ResendConfirmEmailRequestModel,
  ResendConfirmEmailResponseModel,
  ResetPasswordRequestModel,
  ResetPasswordResponseModel,
} from "./Models";
import {
  confirmEmailSchema,
  forgotPasswordSchema,
  getUserInfoEmailSchema as getUserInfoSchema,
  loginSchema,
  registerSchema,
  resendConfirmEmailSchema,
  resetPasswordSchema,
} from "./Validators";
import { queryBuilder } from "@/lib/utils";
import { createSession, decrypt, deleteSession } from "@/lib/actions/session";
import { cookies } from "next/headers";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";

const LoginRequestHandler = async (
  prevState: BaseResponse<LoginResponseModel>,
  formData: FormData,
): Promise<BaseResponse<LoginResponseModel>> => {
  return BaseRequestHandler<LoginRequestModel, LoginResponseModel>({
    formData,
    options: {
      method: "POST",
      endpoint: loginRequestEndpoint,
      schema: loginSchema,
    },
    async okCallback(modelResult) {
      if (!modelResult) {
        return {
          isSuccess: false,
          message: "Server Error: Server reply with no result",
        };
      }
      // create session to store basic user information
      const { accessToken, refreshToken, expiresIn } = modelResult;
      await createSession(accessToken, refreshToken, expiresIn);
    },
  });
};

const RegisterRequestHandler = async (
  prevState: BaseResponse<RegisterResponseModel>,
  formData: FormData,
): Promise<BaseResponse<RegisterResponseModel>> => {
  return BaseRequestHandler<RegisterRequestModel, RegisterResponseModel>({
    formData,
    options: {
      endpoint: registerRequestEndpoint,
      method: "POST",
      schema: registerSchema,
    },
  });
};

const ConfirmEmailRequestHandler = async (
  formData: FormData,
): Promise<BaseResponse<ConfirmEmailResponseModel>> => {
  const urlQuery = queryBuilder({
    userId: formData.get("userId"),
    code: formData.get("code"),
  });
  const requestEndpoint = confirmEmailRequestEndpoint.concat("?", urlQuery);

  return BaseRequestHandler<
    ConfirmEmailRequestModel,
    ConfirmEmailResponseModel
  >({
    formData,
    options: {
      endpoint: requestEndpoint,
      method: "GET",
      schema: confirmEmailSchema,
    },
  });
};

const ResendConfirmEmailRequestHandler = async (
  formData: FormData,
): Promise<BaseResponse<ResendConfirmEmailResponseModel>> => {
  return BaseRequestHandler<
    ResendConfirmEmailRequestModel,
    ResendConfirmEmailResponseModel
  >({
    formData,
    options: {
      endpoint: resendConfirmEmailRequestEndpoint,
      method: "POST",
      schema: resendConfirmEmailSchema,
    },
  });
};

const ForgotPasswordRequestHandler = async (
  prevState: BaseResponse<ForgotPasswordResponseModel>,
  formData: FormData,
): Promise<BaseResponse<ForgotPasswordResponseModel>> => {
  return BaseRequestHandler<
    ForgotPasswordRequestModel,
    ForgotPasswordResponseModel
  >({
    formData,
    options: {
      endpoint: forgotPasswordRequestEndpoint,
      method: "POST",
      schema: forgotPasswordSchema,
    },
  });
};

const ResetPasswordRequestHandler = async (
  prevState: BaseResponse<ResetPasswordResponseModel>,
  formData: FormData,
): Promise<BaseResponse<ResetPasswordResponseModel>> => {
  return BaseRequestHandler<
    ResetPasswordRequestModel,
    ResetPasswordResponseModel
  >({
    formData,
    options: {
      endpoint: resetPasswordRequestEndpoint,
      method: "POST",
      schema: resetPasswordSchema,
    },
  });
};

const GetUserInfoRequestHandler = async (
  formData: FormData,
): Promise<BaseResponse<GetUserInfoResponseModel>> => {
  const urlQuery = queryBuilder({});
  const requestEndpoint = getUserInfoRequestEndpoint.concat("?", urlQuery);

  const cookieSession = cookies().get("session")?.value;
  const session = await decrypt(cookieSession);
  const accessToken = session?.accessToken as string;

  return BaseRequestHandler<GetUserInfoRequestModel, GetUserInfoResponseModel>({
    formData,
    options: {
      endpoint: requestEndpoint,
      method: "GET",
      schema: getUserInfoSchema,
      accessToken: accessToken,
    },
  });
};

const IsUserAuthenticated = async (): Promise<boolean> => {
  const cookieSession = cookies().get("session")?.value;
  // const session = await decrypt(cookieSession);

  // return !!session?.accessToken;
  return !!cookieSession;
};

const Logout = async (): Promise<void> => {
  deleteSession();
};

export {
  LoginRequestHandler,
  RegisterRequestHandler,
  ConfirmEmailRequestHandler,
  ResendConfirmEmailRequestHandler,
  ForgotPasswordRequestHandler,
  ResetPasswordRequestHandler,
  GetUserInfoRequestHandler,
  IsUserAuthenticated,
  Logout,
};
