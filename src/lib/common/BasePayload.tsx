// import { Bounce, toast } from "react-toastify";

import { logResponse } from "./Logging";

type FieldErrors = {
  [key in string]?: string[];
};

interface BaseResponse<T> {
  isSuccess: boolean;
  message: string;
  result?: T;
  errorMessages?: string[];
  fieldErrors?: FieldErrors;
}

interface RequestOptions {
  body?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  contentType?: string;
  accessToken?: string;
}

async function fetchData<TResponse>(
  url: string | URL,
  options: RequestOptions,
): Promise<TResponse | null> {
  const {
    body,
    method = "GET",
    contentType = "application/json",
    accessToken = "",
  } = options;

  try {
    const requestPayload: RequestInit = {
      method,
      headers: {
        "Content-Type": contentType,
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    };
    if (method !== "GET")
      requestPayload.body = body ? JSON.stringify(body) : undefined;

    const response = await fetch(url, requestPayload);

    // Logging
    logResponse(method, response);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const responseData: TResponse = await response.json();

    return responseData;
  } catch (error: any) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Something goes wrong, please try again later");
    }
    return null;
  }
}

export { type BaseResponse, type RequestOptions, fetchData };
