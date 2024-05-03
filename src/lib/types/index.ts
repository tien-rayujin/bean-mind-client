// type FieldErrors = {
//   [key in string]?: string[];
// };

// type FormState<TResponse> = {
//   isSuccess: boolean;
//   message?: string;
//   result?: TResponse;
//   fieldErrors?: FieldErrors;
//   errorMessages?: string[];
//   responseType: "server" | "validation";
// };

type SessionPayload = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  // userId: string;
  // expiresAt: Date;
  // userName: string;
  // isEmailConfirmed: boolean;
};

export type { SessionPayload };
