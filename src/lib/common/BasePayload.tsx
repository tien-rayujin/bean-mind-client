// import { Bounce, toast } from "react-toastify";

import { logResponse } from "./Logging";

type FieldErrors = {
  [key in string]?: string[];
};

interface BaseResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
  fieldErrors?: FieldErrors;
}

interface RequestOptions {
  body?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  contentType?: string;
  accessToken?: string;
}

const fetchData = async function <TResponse>(
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
    // GET method must excluded body
    if (method !== "GET")
      requestPayload.body = body ? JSON.stringify(body) : undefined;

    // opting out caching from data cache
    if (method === "GET") requestPayload.cache = "no-store";

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
};

export { type BaseResponse, type RequestOptions, fetchData };
