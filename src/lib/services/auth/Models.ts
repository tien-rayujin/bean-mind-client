// #region Request Model
type RegisterRequestModel = {
  email: string;
  password: string;
};

type ConfirmEmailRequestModel = {
  userId: string;
  code: string;
};

type LoginRequestModel = {
  email: string;
  password: string;
};

type LoginGoogleRequestModel = {
  idToken: string;
};

type ResendConfirmEmailRequestModel = {
  email: string;
};

type RefreshTokenRequestModel = {
  refreshToken: string;
};

type ForgotPasswordRequestModel = {
  email: string;
};

type ResetPasswordRequestModel = {
  email: string;
  resetCode: string;
  newPassword: string;
};

type GetUserInfoRequestModel = {};

// #region Response Model
type RegisterResponseModel = {};

type ConfirmEmailResponseModel = {};

type LoginResponseModel = {
  tokenType: string;
  expiresIn: number;
  accessToken: string;
  refreshToken: string;
};

type LoginGoogleResponseModel = {
  haha: string;
};

type ResendConfirmEmailResponseModel = {};

type RefreshTokenResponseModel = {
  haha: string;
};

type ForgotPasswordResponseModel = {};

type ResetPasswordResponseModel = {};

type GetUserInfoResponseModel = {
  id: string;
  userName: string;
  phoneNumber: string;
  email: string;
  emailConfirmed: boolean;
  roles: Array<string>;
};

export type {
  RegisterRequestModel,
  LoginRequestModel,
  LoginGoogleRequestModel,
  ResendConfirmEmailRequestModel,
  RefreshTokenRequestModel,
  ForgotPasswordRequestModel,
  ResetPasswordRequestModel,
  RegisterResponseModel,
  LoginResponseModel,
  LoginGoogleResponseModel,
  ResendConfirmEmailResponseModel,
  RefreshTokenResponseModel,
  ForgotPasswordResponseModel,
  ResetPasswordResponseModel,
  ConfirmEmailRequestModel,
  ConfirmEmailResponseModel,
  GetUserInfoRequestModel,
  GetUserInfoResponseModel,
};
