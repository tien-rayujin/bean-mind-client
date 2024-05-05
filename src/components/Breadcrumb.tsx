import Link from "next/link";

interface BreadcrumbProps {
  pageName: string;
  sub?: string;
}

const Breadcrumb = ({ pageName, sub }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-primary">
        {pageName}
        {/* {sub && <sub className="pl-3 text-title-xsm text-graydark">{sub}</sub>} */}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/">Dashboard /</Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
