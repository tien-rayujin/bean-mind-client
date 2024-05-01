"use client";

import { StyButton } from "@/components/Button";
import { Toast } from "@/components/Toast";
import UserLayout from "@/components/layouts/UserLayout";
import { GetUserInfoRequestHandler } from "@/lib/services/auth/Handlers";

const Page: React.FC = () => {
  async function handleClick() {
    const response = await GetUserInfoRequestHandler(new FormData());
    Toast({
      message: response.message,
      type: response.isSuccess ? "info" : "error",
    });
  }

  return (
    <UserLayout>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Home</h1>
        <StyButton extras="mt-4" onClick={handleClick}>
          Show user information
        </StyButton>
      </div>
    </UserLayout>
  );
};

export default Page;
