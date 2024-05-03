"use client";

import { GoogleLoginButton, SubmitButton } from "@/components/Button";
import { LoginRequestHandler } from "@/lib/services/auth/Handlers";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import StyFormInput from "@/components/FormInput";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import Link from "next/link";
import { Toast } from "@/components/Toast";
import { useRouter } from "next/navigation";
import { LoginResponseModel } from "@/lib/services/auth/Models";
import { BaseResponse } from "@/lib/common/BasePayload";

const Page: React.FC = () => {
  const initialState: BaseResponse<LoginResponseModel> = {
    isSuccess: false,
    message: "",
    result: undefined,
    fieldErrors: {},
  };
  const [formState, formAction] = useFormState(
    LoginRequestHandler,
    initialState,
  );
  const router = useRouter();

  useEffect(() => {
    if (formState.message != "") {
      Toast({
        message: formState.message,
        type: formState.isSuccess ? "success" : "error",
      });
      if (formState.isSuccess) {
        router.push("/");
      }
    }
  }, [formState, router]);

  return (
    <>
      <form
        className="w-125 rounded-xl bg-whiter/30 p-8 shadow-md"
        action={formAction}
      >
        <h2 className="mb-4 text-2xl font-bold text-text">Login</h2>
        {!formState.isSuccess &&
          formState.errorMessages &&
          formState.errorMessages.map((eMsg) => (
            <p key={eMsg} className="text-sm font-semibold text-accent">
              {eMsg}
            </p>
          ))}

        <StyFormInput
          type="email"
          icon={<AiOutlineMail />}
          name="email"
          placeholder="example@gmail.com"
          required
          extras="tracking-wide"
          defaultValue="marchjeff145@gmail.com"
        ></StyFormInput>
        {!formState.isSuccess && formState.fieldErrors?.email && (
          <span className="text-sm font-semibold text-accent">
            {formState.fieldErrors?.email}
          </span>
        )}

        <StyFormInput
          type="password"
          icon={<AiOutlineLock />}
          name="password"
          placeholder="Your password"
          extras="tracking-wide"
          required
          defaultValue="12345Ab*"
        ></StyFormInput>
        {!formState.isSuccess && formState.fieldErrors?.password && (
          <span className="text-sm font-semibold text-accent">
            {formState.fieldErrors?.password}
          </span>
        )}
        <div className="mt-2 text-right text-sm">
          Trouble login?{" "}
          <Link
            href="/auth/login/forgotPassword"
            className="font-semibold text-accent underline hover:cursor-pointer"
          >
            Forgot password
          </Link>
        </div>

        <SubmitButton title="Login" />

        <div className="mt-4 flex items-center justify-between">
          <GoogleLoginButton handleClick={() => alert("Login Google")} />

          <div className="inline-block text-sm">
            Don&apos;t have account yet?{" "}
            <Link
              href="/auth/register"
              className="font-semibold text-accent underline hover:cursor-pointer"
            >
              Register
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Page;
