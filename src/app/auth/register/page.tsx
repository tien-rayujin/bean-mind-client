"use client";

import { GoogleLoginButton, SubmitButton } from "@/components/Button";
import { RegisterRequestHandler } from "@/lib/services/auth/Handlers";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import StyFormInput from "@/components/FormInput";
import { useFormState } from "react-dom";
import { FormState } from "@/lib/types";
import { useEffect } from "react";
import Link from "next/link";
import { Toast } from "@/components/Toast";

const Page: React.FC = () => {
  const initialState: FormState = {
    isSuccess: false,
    message: "",
    fieldErrors: {},
    responseType: "server",
  };
  const [formState, formAction] = useFormState(
    RegisterRequestHandler,
    initialState,
  );

  useEffect(() => {
    if (formState.message != "" && formState.responseType === "server") {
      Toast({
        message: formState.message,
        type: formState.isSuccess ? "success" : "error",
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
        ></StyFormInput>
        {!formState.isSuccess && formState.fieldErrors?.password && (
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
