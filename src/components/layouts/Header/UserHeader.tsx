"use client";

import { IsUserAuthenticated, Logout } from "@/lib/services/auth/Handlers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { LogoutButton, LoginButton } from "../../Button";
import { Toast } from "../../Toast";

interface UserHeaderProps {}

const UserHeader: React.FC<UserHeaderProps> = () => {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

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
    <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-4 tracking-wide">
      {/* Logo */}
      <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-3xl font-semibold text-transparent">
        DoPlus
      </h2>

      {/* Navigation */}
      <ul className="inline-flex gap-18">
        <Link
          href="/"
          className="transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:font-semibold hover:text-accent"
        >
          Home
        </Link>
        <li className="transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:font-semibold hover:text-accent">
          About
        </li>
        <li className="transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:font-semibold hover:text-accent">
          Contact
        </li>
      </ul>

      {/* Button Login */}
      {isAuth ? (
        <LogoutButton
          handleClick={() => {
            if (!confirm("Are you sure to logout ?")) {
              return;
            }
            Logout().then(() => {
              router.push("/auth/login");
              Toast({ message: "Logout successfully", type: "success" });
            });
          }}
        />
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export { UserHeader };
