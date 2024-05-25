import { AiOutlineLogout } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FC, ReactNode, useContext } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Logout } from "@/lib/services/auth/Handlers";
import { useRouter } from "next/navigation";
import { Toast } from "./Toast";
import { FaCircle, FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "@/lib/contexts/themeProvider";

// #region Client buttons
interface BaseButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  extras?: string;
}

const StyButton: FC<BaseButtonProp> = ({ extras, ...rest }) => {
  return (
    <button
      {...rest}
      className={clsx(
        "rounded-md bg-primary px-4 py-2 text-base font-normal text-white transition-all duration-200 ease-linear hover:-translate-y-1 hover:bg-primary/80 hover:shadow-md",
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

interface ThemeToggleButtonProps {
  extras?: string;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = (props) => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeToggleButton must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = context;

  const icon = theme === "light" ? <FaMoon /> : <FaSun />;

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        "grid h-10 w-10 place-items-center rounded-full bg-background",
        props.extras,
      )}
    >
      <div className="text-text">{icon}</div>
    </button>
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
        "group flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-xl bg-white text-primary duration-300 hover:scale-110 hover:cursor-pointer",
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
  const style = active ? "text-primary" : "text-background";
  return (
    <button
      type="button"
      className={clsx(
        "grid h-8 w-8 place-items-center rounded-full bg-body/70",
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
  ThemeToggleButton,
  type BaseButtonProp,
};
