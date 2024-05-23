"use client";

import { createPageUrl } from "@/lib/utils";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDebounce } from "use-debounce";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  extras?: string;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { extras, ...rest } = props;
  const [term, setTerm] = useState("");
  const [value] = useDebounce(term, 800);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // change the current url
    router.replace(
      createPageUrl({
        terms: {
          term: value,
        },
        pathname,
        searchParams,
      }),
    );
  }, [pathname, router, searchParams, value]);
  return (
    <div
      className={clsx(
        "relative h-12 rounded-sm bg-background text-body shadow-md",
        extras,
      )}
    >
      <input
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        className="h-full w-full bg-transparent pl-4 pr-12 outline-none"
        placeholder="Search..."
        {...rest}
      />
      <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
    </div>
  );
};

export default SearchBar;
