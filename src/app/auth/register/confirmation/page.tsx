"use client";

import { StyButton } from "@/components/Button";
import Loader from "@/components/Loader";
import { Toast } from "@/components/Toast";
import {
  ConfirmEmailRequestHandler,
  ResendConfirmEmailRequestHandler,
} from "@/lib/services/auth/Handlers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

interface ConfirmationPageProps {
  searchParams: {
    userId: string;
    code: string;
    email: string;
  };
}

const Page: React.FC<ConfirmationPageProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { userId, code, email } = props.searchParams;
  const router = useRouter();

  function handleResendConfirmEmail() {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    ResendConfirmEmailRequestHandler(formData)
      .then((res) => {
        Toast({
          message: res.message,
          type: res.isSuccess ? "success" : "error",
        });
      })
      .catch((reason) => {
        console.error(reason);
      })
      .finally(() => setIsLoading(false));
  }

  const successNotification = (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-accent/60">
        <FaCheck className="font-semibold text-text" size="2.5rem" />
      </div>

      <h2 className="mt-6 text-xl font-semibold text-text">
        Confirmation Successful!
      </h2>

      <p className="leading-relaxed tracking-wide text-text">
        Yo&apos;re all set to log in and explore our application
      </p>
    </div>
  );

  const failNotification = (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-accent/60">
        <FaTimes className="font-semibold text-text" size="2.5rem" />
      </div>

      <h2 className="mt-6 text-xl font-semibold text-text">
        Confirmation Unsuccessful!
      </h2>

      <p className="w-full leading-relaxed tracking-wide text-text">
        The link you clicked may be broken, or the page may have been removed.
        Please check your email for the correct link or request a new one. If
        the problem persists, please contact our support team.
      </p>

      <StyButton onClick={handleResendConfirmEmail} extras="mt-4">
        Resend email
      </StyButton>
    </div>
  );

  const notification = isSuccess ? successNotification : failNotification;

  useEffect(() => {
    if (!userId || !code) {
      router.push("/auth/login");
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("code", code);

    ConfirmEmailRequestHandler(formData)
      .then((res) => {
        setIsSuccess(res.isSuccess);
        Toast({
          message: res.message,
          type: res.isSuccess ? "success" : "error",
        });
      })
      .catch((reason) => {
        setIsSuccess(false);
        console.error(reason);
      })
      .finally(() => setIsLoading(false));
  }, [userId, code, router]);

  return (
    <div className="max-w-150 rounded-xl bg-whiter/30 p-8 shadow-md">
      {isLoading ? <Loader extras="" /> : notification}
    </div>
  );
};

export default Page;
