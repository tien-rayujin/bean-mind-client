import { NextRequest, NextResponse } from "next/server";
import { GetUserInfoRequestHandler } from "./lib/services/auth/Handlers";
import { Toast } from "./components/Toast";

export const config = {
  matcher: ["/manager/:path*"],
};

const middleware = async (request: NextRequest) => {
  // get user infor if existed in cookies("session")
  const getUserInfo = await GetUserInfoRequestHandler(new FormData());
  if (!getUserInfo.isSuccess) {
    console.log("Can not get user information");
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // if (request.nextUrl.pathname.startsWith("/manager")) {
  //   return NextResponse.rewrite(new URL("/auth/login", request.url));
  // }

  // user is not login as manager, redirect
  if (!getUserInfo.result?.roles.includes("Manager")) {
    console.log(`Can not access with role: ${getUserInfo.result?.roles}`);
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
};
export { middleware };
