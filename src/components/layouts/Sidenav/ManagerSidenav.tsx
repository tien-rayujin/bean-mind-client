"use client";

import { LogoutButton } from "@/components/Button";
import { AppLogoIcon } from "@/components/Logo";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { FaBook, FaHome, FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

interface ManagerSideNavProps {}

const ManagerSideNav: React.FC<ManagerSideNavProps> = (
  props: ManagerSideNavProps,
) => {
  return (
    <div className="relative h-full w-[4%] overflow-x-hidden bg-primary py-2.5">
      {/* <AppLogo /> */}
      {/* <div className="absolute left-0 right-0 top-0 grid h-30 w-full place-items-center">
        <AppLogoIcon />
      </div> */}

      <div className="h-30 relative my-4 grid w-full place-items-center">
        <AppLogoIcon />
      </div>

      <SideNavList />

      <LogoutButton
        extras="absolute bottom-4 left-1 right-1 mx-auto"
        isIconOnly
      />
    </div>
  );
};

const SideNavList = () => {
  const pathName = usePathname();
  return (
    <div className="flex flex-col items-center justify-start">
      <Link href={"/manage"} className="w-full">
        <SideNavItem
          active={pathName.includes("/manage")}
          text="Home"
          icon={<FaHome size={24} />}
        />
      </Link>
      <SideNavItem text="User" icon={<FaUser size={24} />} />
      <SideNavItem text="Learn" icon={<FaBook size={24} />} />
      <SideNavItem text="Setting" icon={<FaGear size={24} />} />
    </div>
  );
};

interface SideNavItemProps extends PropsWithChildren {
  text?: string;
  icon?: React.ReactNode;
  active?: boolean;
}

const SideNavItem: React.FC<SideNavItemProps> = (props) => {
  const { text, icon, active = false } = props;

  return (
    <div
      className={clsx(
        "group flex h-16 w-full flex-col items-center justify-center gap-1 bg-white bg-opacity-0 text-white hover:cursor-pointer",
        "hover:bg-opacity-25",
        active && "bg-opacity-25",
      )}
    >
      {icon}
      {/* <h2 className={clsx("font-semibold group-hover:text-text")}>{text}</h2> */}
    </div>
  );
};

export default ManagerSideNav;
