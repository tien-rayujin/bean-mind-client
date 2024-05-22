import { AiOutlineLogout } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FC, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Logout } from "@/lib/services/auth/Handlers";
import { useRouter } from "next/navigation";
import { Toast } from "./Toast";
import { FaCircle } from "react-icons/fa";

// #region Client buttons
interface BaseButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  extras?: string;
}

const StyButton: FC<BaseButtonProp> = ({ extras, ...rest }) => {
  return (
    <button
      {...rest}
      className={clsx(
        "rounded-md bg-primary/70 px-4 py-2 text-base font-normal text-text transition-all duration-200 ease-linear hover:-translate-y-1 hover:bg-primary/90 hover:shadow-md",
        extras,
      )}
    >
      {rest.children}
    </button>
  );
};

interface GoogleLoginButtonProp {
  handleClick: () => void;
  extras?: string;
}

const GoogleLoginButton: FC<GoogleLoginButtonProp> = (props) => {
  return (
    <button
      className={clsx(
        "flex items-center justify-between rounded-md border border-stroke bg-whiten px-3 py-2 text-sm font-normal text-body transition-all duration-200 ease-linear focus:border-primary focus:outline-none focus:ring",
        props.extras,
      )}
      onClick={() => props.handleClick()}
    >
      <span className="mr-2">
        <FcGoogle />
      </span>
      <span className="w-full">Sign in with Google</span>
    </button>
  );
};

interface NavigationButtonProp {
  icon?: ReactNode;
  title?: string;
}

const NavigationButton: React.FC<NavigationButtonProp> = (props) => {
  const { icon, title } = props;

  return (
    <button className="grid h-8 w-8 place-items-center rounded-md bg-whiter font-semibold text-accent transition-all duration-200 ease-linear hover:-translate-y-1 hover:shadow-md">
      {icon && icon} {title && title}
    </button>
  );
};

// #region Action buttons
const LoginButton: React.FC<{}> = (props) => {
  return (
    <Link
      {...props}
      href="/auth/login"
      className="rounded-full bg-primary/70 px-6 py-2 duration-150 hover:bg-primary/80 hover:shadow-lightBulp"
    >
      Login
    </Link>
  );
};

interface LogoutButtonProps {
  // handleClick: () => void;
  extras?: string;
  isIconOnly?: boolean;
}

const LogoutButton: React.FC<LogoutButtonProps> = (props) => {
  const { extras, isIconOnly = false } = props;
  const router = useRouter();
  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-x-2.5 rounded-md bg-accent/70 px-6 py-2 duration-150 hover:bg-accent/80 hover:shadow-layoutPopup hover:shadow-accent",
        extras,
      )}
      onClick={() => {
        if (!confirm("Are you sure to logout ?")) {
          return;
        }
        Logout().then(() => {
          router.push("/auth/login");
          Toast({ message: "Logout successfully", type: "success" });
        });
      }}
    >
      <AiOutlineLogout />
      {!isIconOnly && <span className="font-semibold">Logout</span>}
    </button>
  );
};

interface BiStateButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  extras?: string;
}

const BiStateButton: React.FC<BiStateButtonProps> = (props) => {
  const { active = false, extras, ...rest } = props;
  const style = active ? "text-success" : "text-background";
  return (
    <button
      type="button"
      className={clsx(
        "grid h-8 w-8 place-items-center rounded-full bg-backgroundDark/40",
        style,
      )}
      {...rest}
    >
      <FaCircle />
    </button>
  );
};

export {
  StyButton,
  GoogleLoginButton,
  NavigationButton,
  LoginButton,
  LogoutButton,
  BiStateButton,
};
