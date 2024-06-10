"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { StyButton } from "./Button";
import { isGuid } from "@/lib/utils";
import { FaArrowLeft, FaCircle, FaInbox, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

interface BreadcrumbProps {
  pageName: string;
  sub?: string;
}

const Breadcrumb = ({ pageName, sub }: BreadcrumbProps) => {
  const pathName = usePathname();
  const prevPath = pathName.slice(0, pathName.lastIndexOf("/"));
  const curPath = prevPath.slice(prevPath.lastIndexOf("/") + 1);

  const backButton = (
    <StyButton extras="!text-white hover:!-translate-y-0 !text-sm">
      <FaArrowLeft />
    </StyButton>
  );
  const isCurPathGuid = isGuid(curPath);

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <nav>
        <ol className="flex items-center gap-2">
          <li className="capitalize">
            <Link href={prevPath}>{isCurPathGuid ? backButton : curPath}</Link>
          </li>
          <span className="text-accent">/</span>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>

      {/* Place the user information here */}
      <div className="flex items-center justify-end gap-2.5">
        {/* Change theme */}
        {/* <ThemeToggleButton /> */}

        {/* Message */}
        <div className="text-md relative grid h-10 w-10 cursor-pointer place-items-center rounded-md border border-stroke bg-white text-primary hover:bg-opacity-60">
          <FaMessage />
          <div className="absolute -right-1 -top-1 text-sm text-danger">
            <FaCircle />
          </div>
        </div>
        {/* Notification */}
        <div className="text-md relative grid h-10 w-10 cursor-pointer place-items-center rounded-md border border-stroke bg-white text-primary hover:bg-opacity-60">
          <FaInbox />
          <div className="absolute -right-1 -top-1 text-sm text-danger">
            <FaCircle />
          </div>
        </div>
        {/* User */}
        <div className="text-md relative flex cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-stroke bg-white p-2 text-primary hover:bg-opacity-60">
          <span>Mr. Manager</span>
          <div className="grid h-8 w-8 place-items-center rounded-full bg-primary text-white">
            <FaUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
