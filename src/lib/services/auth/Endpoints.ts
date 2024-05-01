const apiURL = new URL(process.env.NEXT_PUBLIC_API_URL || "");
const authEndpoint = "/auth";

const loginRequestEndpoint = apiURL.href.concat(`${authEndpoint}/login`);
const registerRequestEndpoint = apiURL.href.concat(`${authEndpoint}/register`);
const loginGoogleRequestEndpoint = apiURL.href.concat(
  `${authEndpoint}/loginGoogle`,
);
const resendConfirmEmailRequestEndpoint = apiURL.href.concat(`
  /resendConfirmEmail`);
const forgotPasswordRequestEndpoint = apiURL.href.concat(`
  ${authEndpoint}/forgotPassword`);
const resetPasswordRequestEndpoint = apiURL.href.concat(
  `${authEndpoint}/resetPassword`,
);
const confirmEmailRequestEndpoint = apiURL.href.concat(
  `${authEndpoint}/confirmEmail`,
);

const getUserInfoRequestEndpoint = apiURL.href.concat(`${authEndpoint}/info`);

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
