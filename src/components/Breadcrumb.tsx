"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  pageName: string;
  sub?: string;
}

const Breadcrumb = ({ pageName, sub }: BreadcrumbProps) => {
  const pathName = usePathname();
  const prevPath = pathName.slice(0, pathName.lastIndexOf("/"));

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-primary">
        {pageName}
        {/* {sub && <sub className="pl-3 text-title-xsm text-graydark">{sub}</sub>} */}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li className="capitalize">
            <Link href={prevPath}>
              {prevPath.slice(prevPath.lastIndexOf("/") + 1)}
            </Link>
          </li>
          <span className="text-accent">/</span>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
