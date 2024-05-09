"use client";

import { GoogleLoginButton } from "@/components/Button";
import { RegisterRequestHandler } from "@/lib/services/auth/Handlers";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { StyFormInput } from "@/components/Form/FormInput";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import Link from "next/link";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { RegisterResponseModel } from "@/lib/services/auth/Models";
import { SubmitButton } from "@/components/Form/Button";

const Page: React.FC = () => {
  const initialState: BaseResponse<RegisterResponseModel> = {
    success: false,
    message: "",
    fieldErrors: {},
  };
  const [formState, formAction] = useFormState(
    RegisterRequestHandler,
    initialState,
  );

  useEffect(() => {
    if (formState.message != "") {
      Toast({
        message: formState.message,
        type: formState.success ? "success" : "error",
      });
    }
  }, [formState]);

  return (
    <>
      <form
        className="w-125 rounded-xl bg-whiter/30 p-8 shadow-md"
        action={formAction}
      >
        <h2 className="mb-4 text-2xl font-bold text-text">Register</h2>
        {!formState.success &&
          formState.errors &&
          formState.errors.map((eMsg) => (
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
        ></StyFormInput>
        {!formState.success && formState.fieldErrors?.email && (
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
        ></StyFormInput>
        {!formState.success && formState.fieldErrors?.password && (
          <span className="text-sm font-semibold text-accent">
            {formState.fieldErrors?.password}
          </span>
        )}

        <SubmitButton title="Register" />

        <div className="mt-4 flex items-center justify-between">
          <GoogleLoginButton handleClick={() => alert("Login Google")} />

          <div className="inline-block text-sm">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-semibold text-accent underline hover:cursor-pointer"
            >
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Page;
