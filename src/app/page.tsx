"use client";

import { StyButton } from "@/components/Button";
import { Toast } from "@/components/Toast";
import UserLayout from "@/components/layouts/UserLayout";
import { GetUserInfoRequestHandler } from "@/lib/services/auth/Handlers";
import Link from "next/link";

const Page: React.FC = () => {
  const handleClick = async () => {
    const response = await GetUserInfoRequestHandler();
    Toast({
      message: response.message,
      type: response.success ? "info" : "error",
    });
  };

  return (
    <UserLayout>
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl font-bold">Home</h1>
        <StyButton extras="mt-4" onClick={handleClick}>
          Show user information
        </StyButton>
        <StyButton extras="mt-4">
          <Link href="/manager">Go to Manager page</Link>
        </StyButton>
      </div>
    </UserLayout>
  );
};

export default Page;
