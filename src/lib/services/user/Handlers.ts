"use server";

import { getUserEndpoint } from "@/lib/services/Endpoints";
import { GetUserRequestModel, GetUserResponseModel } from "./Models";
import { getUserInfoSchema } from "./Validators";
import { getAccessTokenSession } from "@/lib/actions/session";
import { BaseRequestHandler } from "@/lib/common/BaseRequestHandler";
import { BaseResponse } from "@/lib/common/BasePayload";

const GetUserRequestHandler = async (): Promise<
  BaseResponse<GetUserResponseModel>
> => {
  const accessToken = await getAccessTokenSession();
  if (!accessToken) {
    return {
      success: false,
      message: "Authentication required to perform this action",
    };
  }

  return BaseRequestHandler<GetUserRequestModel, GetUserResponseModel>({
    options: {
      endpoint: getUserEndpoint(),
      method: "GET",
      schema: getUserInfoSchema,
      accessToken: accessToken,
    },
  });
};
export { GetUserRequestHandler };
