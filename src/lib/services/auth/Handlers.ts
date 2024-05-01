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
import { BaseResponse, fetchData } from "@/lib/common/BasePayload";
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
import { FormState } from "@/lib/types";
import { queryBuilder } from "@/lib/utils";
import { createSession, decrypt, deleteSession } from "@/lib/actions/session";
import { cookies } from "next/headers";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";

const LoginRequestHandler = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  return BaseRequestHandler<LoginRequestModel, LoginResponseModel>(
    formData,
    {
      method: "POST",
      endpoint: loginRequestEndpoint,
      schema: loginSchema,
    },
    async (modelResult) => {
      // create session to store basic user information
      const { accessToken, refreshToken, expiresIn } = modelResult;
      await createSession(accessToken, refreshToken, expiresIn);
    },
  );
};

const RegisterRequestHandler = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  return BaseRequestHandler<RegisterRequestModel, RegisterResponseModel>(
    formData,
    {
      endpoint: registerRequestEndpoint,
      method: "POST",
      schema: registerSchema,
    },
  );
};

const ConfirmEmailRequestHandler = async (
  formData: FormData,
): Promise<FormState> => {
  const urlQuery = queryBuilder({
    userId: formData.get("userId"),
    code: formData.get("code"),
  });
  const requestEndpoint = confirmEmailRequestEndpoint.concat("?", urlQuery);

  return BaseRequestHandler<
    ConfirmEmailRequestModel,
    ConfirmEmailResponseModel
  >(formData, {
    endpoint: requestEndpoint,
    method: "GET",
    schema: confirmEmailSchema,
  });
};

const ResendConfirmEmailRequestHandler = async (
  formData: FormData,
): Promise<FormState> => {
  return BaseRequestHandler<
    ResendConfirmEmailRequestModel,
    ResendConfirmEmailResponseModel
  >(formData, {
    endpoint: resendConfirmEmailRequestEndpoint,
    method: "POST",
    schema: resendConfirmEmailSchema,
  });
};

const ForgotPasswordRequestHandler = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  return BaseRequestHandler<
    ForgotPasswordRequestModel,
    ForgotPasswordResponseModel
  >(formData, {
    endpoint: forgotPasswordRequestEndpoint,
    method: "POST",
    schema: forgotPasswordSchema,
  });
};

const ResetPasswordRequestHandler = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  return BaseRequestHandler<
    ResetPasswordRequestModel,
    ResetPasswordResponseModel
  >(formData, {
    endpoint: resetPasswordRequestEndpoint,
    method: "POST",
    schema: resetPasswordSchema,
  });
};

const GetUserInfoRequestHandler = async (
  formData: FormData,
): Promise<FormState> => {
  const urlQuery = queryBuilder({});
  const requestEndpoint = getUserInfoRequestEndpoint.concat("?", urlQuery);

  const cookieSession = cookies().get("session")?.value;
  const session = await decrypt(cookieSession);
  const accessToken = session?.accessToken as string;

  return BaseRequestHandler<GetUserInfoRequestModel, GetUserInfoResponseModel>(
    formData,
    {
      endpoint: requestEndpoint,
      method: "GET",
      schema: getUserInfoSchema,
      accessToken: accessToken,
    },
  );
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
