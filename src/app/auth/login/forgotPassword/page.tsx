"use client";

import { StyButton, SubmitButton } from "@/components/Button";
import { ForgotPasswordRequestHandler } from "@/lib/services/auth/Handlers";
import { AiOutlineMail } from "react-icons/ai";
import StyFormInput from "@/components/FormInput";
import { useFormState } from "react-dom";
import { FormState } from "@/lib/types";
import { useEffect } from "react";
import { Toast } from "@/components/Toast";
import Link from "next/link";

const Page: React.FC = () => {
  const initialState: FormState = {
    isSuccess: false,
    message: "",
    fieldErrors: {},
    responseType: "server",
  };
  const [formState, formAction] = useFormState(
    ForgotPasswordRequestHandler,
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
        <h2 className="mb-4 text-2xl font-bold text-text">Forgot password</h2>
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

        <SubmitButton title="Submit" />

        <StyButton
          extras="w-full mt-2 !bg-accent/70 !hover:bg-accent/90"
          type="button"
        >
          <Link href="/auth/login">Return to Login</Link>
        </StyButton>
      </form>
    </>
  );
};

export default Page;
