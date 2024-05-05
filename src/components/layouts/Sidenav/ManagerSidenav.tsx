"use client";

import { LogoutButton } from "@/components/Button";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import { FaBook, FaHome, FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { GiJellyBeans } from "react-icons/gi";

interface ManagerSideNavProps {}

const ManagerSideNav: React.FC<ManagerSideNavProps> = (
  props: ManagerSideNavProps,
) => {
  return (
    <div className="bg-backgroundDark/20 overflow-x-hiddencj relative h-full w-25 py-2.5">
      {/* <AppLogo /> */}
      <div className="absolute left-0 right-0 top-0 grid h-20 w-full place-items-center">
        <GiJellyBeans
          size={48}
          className={"text-primary group-hover:text-text"}
        />
      </div>

      <SideNavList />

      <LogoutButton extras="absolute bottom-1 left-1 right-1" isIconOnly />
    </div>
  );
};

const SideNavList = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <SideNavItem
        color="primary"
        text="Home"
        icon={
          <FaHome size={24} className={"text-primary group-hover:text-text"} />
        }
      />
      <SideNavItem
        color="primary"
        text="User"
        icon={
          <FaUser size={24} className={"text-primary group-hover:text-text"} />
        }
      />
      <SideNavItem
        color="primary"
        text="Learn"
        icon={
          <FaBook size={24} className={"text-primary group-hover:text-text"} />
        }
      />
      <SideNavItem
        color="primary"
        text="Setting"
        icon={
          <FaGear size={24} className={"text-primary group-hover:text-text"} />
        }
      />
    </div>
  );
};

interface SideNavItemProps extends PropsWithChildren {
  color?: string;
  text?: string;
  icon?: React.ReactNode;
}

const SideNavItem: React.FC<SideNavItemProps> = (props) => {
  const { color = "primary", text, icon } = props;

  const textColor = `text-${color}`;

  return (
    <div
      className={clsx(
        "group flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-xl border border-strokedark bg-background transition-all duration-200 hover:scale-105 hover:cursor-pointer",
        `hover:bg-${color}`,
      )}
    >
      {icon}
      <h2 className={clsx("font-semibold group-hover:text-text", textColor)}>
        {text}
      </h2>
    </div>
  );
};

export default ManagerSideNav;
