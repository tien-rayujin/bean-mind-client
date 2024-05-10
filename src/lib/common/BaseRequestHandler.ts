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
        success: false,
        message: "Field Validation Failed",
        fieldErrors: validatedFields.error.formErrors.fieldErrors,
      };
    }
  }

  // log out the payload request
  // console.log({ payload });

  // request API
  const response = await fetchData<BaseResponse<TResponse>>(options.endpoint, {
    body: payload,
    method: options.method,
    accessToken: options.accessToken,
  });

  // server response with fail resulst
  if (!response || !response.success) {
    console.error({ response });
    return {
      success: false,
      message: response?.message || "Server error",
      errors: response?.errors,
      fieldErrors: response?.fieldErrors,
    };
  }

  // callback function
  okCallback && okCallback(response.data);

  return {
    success: response.success,
    message: response?.message,
    data: response.data,
    errors: response?.errors,
  };
};

export { BaseRequestHandler };
