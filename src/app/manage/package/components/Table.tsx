import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetPackagesRequestHandler } from "@/lib/services/package/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface PackageTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
}

const PackageTable: React.FC<PackageTableProps> = async (props) => {
  const { term, pageIndex, pageSize } = props;
  const packages = (
    await GetPackagesRequestHandler({
      term,
      pageIndex,
      pageSize,
    })
  ).data;
  if (!packages) return notFound();
  const { items, totalPage } = packages;

  return (
    <>
      <Suspense key={term + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default PackageTable;
