"use server";

import { ZodSchema } from "zod";
import { fetchData, BaseResponse } from "./BasePayload";

interface RequestHandlerOptions<T> {
  endpoint: string | URL;
  schema?: ZodSchema<T>;
  method: "GET" | "POST" | "PUT" | "DELETE";
  accessToken?: string;
}

interface BaseRequestHandlerProps<TRequest, TResponse> {
  formData?: FormData;
  options: RequestHandlerOptions<TRequest>;
  okCallback?: (arg?: TResponse) => void;
}

const BaseRequestHandler = async <TRequest, TResponse>(
  props: BaseRequestHandlerProps<TRequest, TResponse>,
): Promise<BaseResponse<TResponse>> => {
  const { formData, options, okCallback } = props;

  const rawFormData = Object.fromEntries(
    formData ? formData.entries() : new FormData(),
  );
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
      };
    }
  }

  // request API
  const response = await fetchData<BaseResponse<TResponse>>(options.endpoint, {
    body: payload,
    method: options.method,
    accessToken: options.accessToken,
  });

  // server response with fail resulst
  if (!response || !response.isSuccess) {
    return {
      isSuccess: false,
      message: response?.message || "Server error",
    };
  }

  // callback function
  okCallback && okCallback(response.result);

  return {
    isSuccess: response.isSuccess,
    message: response?.message,
    result: response.result,
    errorMessages: response?.errorMessages,
  };
};

export { BaseRequestHandler };
