"use client";

import { createPageUrl } from "@/lib/utils";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

interface PaginationProps {
  page: number;
  totalPage: number;
}

const Pagination = ({ page, totalPage }: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const back = page > 1 ? page - 1 : 1;
  const next = page === totalPage ? page : page + 1;

  return (
    <div className="flex items-center justify-center gap-4 rounded-sm border-stroke py-4 text-primary dark:border-strokedark dark:text-white md:gap-6 md:py-6 2xl:gap-7.5 2xl:py-7.5">
      <NavigationArrow
        href={createPageUrl({
          terms: { pageIndex: String(back) },
          pathname,
          searchParams,
        })}
        disabled={page === 1}
        direction="left"
      />
      <p>{page}</p>
      <NavigationArrow
        href={createPageUrl({
          terms: { pageIndex: String(next) },
          pathname,
          searchParams,
        })}
        disabled={page === totalPage}
        direction="right"
      />
    </div>
  );
};

const NavigationArrow = ({
  href,
  disabled,
  direction,
}: {
  href: string;
  disabled: boolean;
  direction: "left" | "right";
}) => {
  const className = clsx(
    "fill-current text-sm text-accent",
    disabled && "opacity-65",
    direction === "right" && "rotate-180",
  );

  const icon = <FaChevronLeft size={"12px"} />;

  return disabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
};

export default Pagination;
