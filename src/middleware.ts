import { NextRequest, NextResponse } from "next/server";
import { GetUserInfoRequestHandler } from "./lib/services/user/Handlers";

export const config = {
  matcher: ["/manage/:path*", "/admin/:path*"],
};

const middleware = async (request: NextRequest) => {
  // get user infor if existed in cookies("session")
  const getUserInfo = await GetUserInfoRequestHandler();
  if (!getUserInfo.success) {
    console.log("Can not get user information");
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // if (request.nextUrl.pathname.startsWith("/manage")) {
  //   return NextResponse.rewrite(new URL("/auth/login", request.url));
  // }

  const user = getUserInfo.data;
  // user tried to access admin page
  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    !user?.roleNames.includes("Administrator")
  ) {
    console.log(
      `Invalid access: From [${user?.email} - ${user?.roleNames}] To [${request.nextUrl.pathname}]`,
    );
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // user tried to access manager page
  // console.log({ user });
  if (
    request.nextUrl.pathname.startsWith("/manage") &&
    !user?.roleNames.includes("Manager")
  ) {
    console.log(
      `Invalid access: From [${user?.email} - ${user?.roleNames}] To [${request.nextUrl.pathname}]`,
    );
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
};
export { middleware };
