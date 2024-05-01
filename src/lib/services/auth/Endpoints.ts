const apiURL = new URL(process.env.NEXT_PUBLIC_API_URL || "");

const loginRequestEndpoint = apiURL.href.concat("/auth/login");
const registerRequestEndpoint = apiURL.href.concat("/auth/register");
const loginGoogleRequestEndpoint = apiURL.href.concat("/auth/loginGoogle");
const resendConfirmEmailRequestEndpoint = apiURL.href.concat(
  "/resendConfirmEmail",
);
const forgotPasswordRequestEndpoint = apiURL.href.concat(
  "/auth/forgotPassword",
);
const resetPasswordRequestEndpoint = apiURL.href.concat("/auth/resetPassword");
const confirmEmailRequestEndpoint = apiURL.href.concat("/auth/confirmEmail");

const getUserInfoRequestEndpoint = apiURL.href.concat("/auth/info");

export {
  loginRequestEndpoint,
  registerRequestEndpoint,
  loginGoogleRequestEndpoint,
  resendConfirmEmailRequestEndpoint,
  forgotPasswordRequestEndpoint,
  resetPasswordRequestEndpoint,
  confirmEmailRequestEndpoint,
  getUserInfoRequestEndpoint,
};
