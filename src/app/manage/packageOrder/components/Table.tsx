import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetPackageOrdersRequestHandler } from "@/lib/services/packageOrder/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface PackageOrderTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
}

const PackageOrderTable: React.FC<PackageOrderTableProps> = async (props) => {
  const { term, pageIndex, pageSize } = props;
  const packageorders = (
    await GetPackageOrdersRequestHandler({
      term,
      pageIndex,
      pageSize,
    })
  ).data;
  if (!packageorders) return notFound();
  const { items, totalPage } = packageorders;

  return (
    <>
      <Suspense key={term + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default PackageOrderTable;
