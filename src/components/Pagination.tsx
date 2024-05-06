"use client";

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

  function createPageUrl(page: number | string) {
    const params = new URLSearchParams(searchParams);
    params.set("pageIndex", page.toString());
    return `${pathname}?${params.toString()}`;
  }

  return (
    <div className="flex items-center justify-center gap-4 rounded-sm border-stroke py-4 text-primary dark:border-strokedark dark:text-white md:gap-6 md:py-6 2xl:gap-7.5 2xl:py-7.5">
      <NavigationArrow
        href={createPageUrl(page - 1)}
        disabled={page === 1}
        direction="left"
      />
      <p>{page}</p>
      <NavigationArrow
        href={createPageUrl(page + 1)}
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
