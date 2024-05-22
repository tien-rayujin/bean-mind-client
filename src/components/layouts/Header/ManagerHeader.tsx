"use client";

import { IsUserAuthenticated } from "@/lib/services/auth/Handlers";
import { useState, useEffect } from "react";
import { LogoutButton, LoginButton } from "../../Button";
import { AppLogo } from "@/components/Logo";

interface ManagerHeaderProps {}

const ManagerHeader: React.FC<ManagerHeaderProps> = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    IsUserAuthenticated().then((res) => {
      setIsAuth(res);

      // user already login, redirect user to home page
      // if (res) {
      //   Toast({ message: "Authenticated", type: "info" });
      //   router.push("/");
      // }
    });
  }, []);

  return (
    <div className="flex items-center justify-between gap-4 tracking-wide">
      {/* Logo */}
      <AppLogo />
      {/* Button Login */}
      {isAuth ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

export { ManagerHeader };
