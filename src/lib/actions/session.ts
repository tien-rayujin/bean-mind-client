import "server-only";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

export type SessionPayload = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  // userId: string;
  // expiresAt: Date;
  // userName: string;
  // isEmailConfirmed: boolean;
};

const secretKey = process.env.SESSION_SECRET;
if (!secretKey) throw new Error("Missing SESSION_SECRET");

const encodedKey = new TextEncoder().encode(secretKey);

const encrypt = async (payload: SessionPayload) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
};

const decrypt = async (session: string | undefined = "") => {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.error("Failed to verify session");
  }
};

const getAccessTokenSession = async () => {
  const cookieSession = cookies().get("session")?.value;
  const session = await decrypt(cookieSession);
  const accessToken = session?.accessToken as string;

  return accessToken;
};

const createSession = async (
  accessToken: string,
  refreshToken: string,
  expiresIn: number,
) => {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  const session = await encrypt({
    accessToken,
    refreshToken,
    expiresIn,
  });

  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
};

const updateSession = async () => {
  const session = cookies().get("session")?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
};

const deleteSession = () => {
  cookies().delete("session");
};

export {
  encrypt,
  decrypt,
  createSession,
  updateSession,
  deleteSession,
  getAccessTokenSession,
};
