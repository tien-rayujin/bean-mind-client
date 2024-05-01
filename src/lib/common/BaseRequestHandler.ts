"use server";

import { ZodSchema } from "zod";
import { FormState } from "../types";
import { fetchData, BaseResponse } from "./BasePayload";

interface RequestHandlerOptions<T> {
  endpoint: string | URL;
  schema?: ZodSchema<T>;
  method: "GET" | "POST" | "PUT" | "DELETE";
  accessToken?: string;
}

const BaseRequestHandler = async <TRequest, TResponse>(
  formData: FormData,
  options: RequestHandlerOptions<TRequest>,
  okCallback?: (arg: TResponse) => void,
): Promise<FormState> => {
  const rawFormData = Object.fromEntries(formData.entries());
  const payload = Object.fromEntries(
    Object.entries(rawFormData).filter(([key]) => !key.startsWith("$ACTION_")),
  ) as TRequest;

  // schema validation if provided
  if (options.schema) {
    let validatedFields = await options.schema.safeParseAsync(payload);

    if (!validatedFields.success) {
      return {
        isSuccess: false,
        message: "Field Validation Failed",
        fieldErrors: validatedFields.error.formErrors.fieldErrors,
        responseType: "validation",
      };
    }
  }

  const response = await fetchData<BaseResponse<TResponse>>(options.endpoint, {
    body: payload,
    method: options.method,
    accessToken: options.accessToken,
  });

  // server response with fail resulst
  if (!response) {
    return {
      isSuccess: false,
      message: "Server error",
      responseType: "server",
    };
  }

  // callback function
  okCallback && okCallback(response.result);

  return {
    isSuccess: response.isSuccess,
    message: response?.message,
    errorMessages: response?.errorMessages,
    responseType: "server",
  };
};

export { BaseRequestHandler };
