"use client";

import { AppLogo } from "@/components/Logo";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { FaFolder, FaListAlt } from "react-icons/fa";

interface NavItem {
  href?: string;
  label: string;
  icon?: ReactNode;
  childrens?: NavItem[];
}

const managePage: NavItem[] = [
  {
    label: "Manage",
    childrens: [
      {
        href: "/manage/course",
        label: "Courses",
        icon: <FaFolder />,
      },
      {
        href: "/manage/chapter",
        label: "Chapter",
        icon: <FaFolder />,
      },
      {
        href: "/manage/topic",
        label: "Topic",
        icon: <FaFolder />,
      },
      {
        href: "/manage/worksheet",
        label: "Worksheet",
        icon: <FaFolder />,
      },
      {
        href: "/manage/question",
        label: "question",
        icon: <FaFolder />,
      },
      {
        href: "/manage/user",
        label: "user",
        icon: <FaFolder />,
      },
    ],
  },
];

const configurationPage: NavItem[] = [
  {
    label: "Configuration",
    childrens: [
      {
        href: "/manage/subject",
        label: "Subject",
        icon: <FaFolder />,
      },
      {
        href: "/manage/worksheetTemplate",
        label: "Worksheet Template",
        icon: <FaFolder />,
      },
      {
        href: "/manage/questionType",
        label: "Question Type",
        icon: <FaFolder />,
      },
      {
        href: "/manage/questionLevel",
        label: "Question Level",
        icon: <FaFolder />,
      },
    ],
  },
];

const navigationList: NavItem[] = [...managePage, ...configurationPage];

const ManagerSideNavItem: React.FC<{ navItem: NavItem }> = (props) => {
  const { href, label, icon, childrens } = props.navItem;
  const pathname = usePathname();
  const isActive = href ? pathname.includes(href) : false;
  return (
    <>
      <div
        className={clsx(
          "flex items-center justify-start",
          childrens ? "mt-4" : "mt-1.5",
        )}
      >
        {/* {childrens && <FaAngleRight />} */}
        <div className={clsx("text-slate-500", !childrens && "ml-6")}>
          {icon && icon}
        </div>
        {childrens ? (
          <span
            className={clsx(
              "ml-3 text-base capitalize",
              childrens
                ? "font-semibold text-primary"
                : "font-normal text-slate-500",
            )}
          >
            {label}
          </span>
        ) : (
          <Link
            href={href || "/"}
            className={clsx(
              "ml-3 text-base capitalize",
              childrens
                ? "font-semibold text-primary"
                : "font-normal text-slate-500 hover:font-semibold hover:text-primary",
              isActive && "underline",
            )}
          >
            {label}
          </Link>
        )}
      </div>
      {childrens &&
        childrens.map((childItem, idx) => (
          <ManagerSideNavItem
            key={childItem.href || "/" + childItem.label + idx}
            navItem={childItem}
          />
        ))}
    </>
  );
};

const ManagerSideNavExpanded: React.FC<{}> = (props) => {
  return (
    <div className="flex h-full w-[15%] flex-col overflow-x-scroll border-r border-stroke">
      {/* Header */}
      <section className="flex w-full items-center justify-center border-b border-primary border-opacity-40 p-4">
        <AppLogo />
      </section>
      {/* Main nav */}
      <main className="w-full flex-1 p-4">
        <div>
          <h2 className="flex items-center gap-x-2.5 text-base text-lg font-semibold">
            <FaListAlt /> Navigation
          </h2>
          {navigationList &&
            navigationList.map((navItem, idx) => (
              <ManagerSideNavItem
                key={navItem.href || "/" + navItem.label + idx}
                navItem={navItem}
              />
            ))}
        </div>
      </main>
      {/* Footer */}
      <section className="w-full p-4">
        {/* Something in here */}
        <div className=""></div>

        {/* Button to create */}
        {/* <div className="flex w-full items-center justify-between rounded-xl bg-primary px-2 py-1 text-white hover:cursor-pointer">
          <span className="font-semibold">Create New</span>
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/20">
            <button className="">
              <FaPlus />
            </button>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export { ManagerSideNavItem, ManagerSideNavExpanded };
