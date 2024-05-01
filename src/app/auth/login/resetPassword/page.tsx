"use client";

import { StyButton, SubmitButton } from "@/components/Button";
import { ResetPasswordRequestHandler } from "@/lib/services/auth/Handlers";
import { AiOutlineLock } from "react-icons/ai";
import StyFormInput from "@/components/FormInput";
import { useFormState } from "react-dom";
import { FormState } from "@/lib/types";
import { useEffect } from "react";
import { Toast } from "@/components/Toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ResetPasswordPageProps {
  searchParams: {
    resetCode: string;
    email: string;
  };
}

const Page: React.FC<ResetPasswordPageProps> = (props) => {
  const initialState: FormState = {
    isSuccess: false,
    message: "",
    fieldErrors: {},
    responseType: "server",
  };
  const { resetCode, email } = props.searchParams;
  const [formState, formAction] = useFormState(
    ResetPasswordRequestHandler,
    initialState,
  );
  const router = useRouter();

  useEffect(() => {
    if (!resetCode || !email) {
      router.push("/auth/login");
    }
  }, [resetCode, email, router]);

  useEffect(() => {
    if (formState.message != "" && formState.responseType === "server") {
      Toast({
        message: formState.message,
        type: formState.isSuccess ? "success" : "error",
      });
      if (formState.isSuccess) {
        router.push("/auth/login");
      }
    }
  }, [formState, router]);

  return (
    <>
      <form
        className="w-125 rounded-xl bg-whiter/30 p-8 shadow-md"
        action={formAction}
      >
        <h2 className="mb-4 text-2xl font-bold text-text">Reset password</h2>
        {!formState.isSuccess &&
          formState.errorMessages &&
          formState.errorMessages.map((eMsg) => (
            <p key={eMsg} className="text-sm font-semibold text-accent">
              {eMsg}
            </p>
          ))}

        <input
          type="hidden"
          name="resetCode"
          value={decodeURIComponent(resetCode)}
        />
        <input type="hidden" name="email" value={email} />

        <StyFormInput
          type="password"
          icon={<AiOutlineLock />}
          name="newPassword"
          placeholder="Your new password"
          required
          extras="tracking-wide"
        ></StyFormInput>
        {!formState.isSuccess && formState.fieldErrors?.newPassword && (
          <span className="text-sm font-semibold text-accent">
            {formState.fieldErrors?.newPassword}
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
