type FieldErrors = {
  [key in string]?: string[];
};

type FormState = {
  isSuccess: boolean;
  message?: string;
  fieldErrors?: FieldErrors;
  errorMessages?: string[];
  responseType: "server" | "validation";
};

type SessionPayload = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  // userId: string;
  // expiresAt: Date;
  // userName: string;
  // isEmailConfirmed: boolean;
};

export type { FormState, SessionPayload };
