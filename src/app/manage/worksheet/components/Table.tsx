import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetWorksheetsRequestHandler } from "@/lib/services/worksheet/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface WorksheetTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
}

const WorksheetTable: React.FC<WorksheetTableProps> = async (props) => {
  const { term, pageIndex, pageSize } = props;
  const worksheets = (
    await GetWorksheetsRequestHandler({
      term,
      pageIndex,
      pageSize,
    })
  ).data;
  if (!worksheets) return notFound();
  const { items, totalPage } = worksheets;

  return (
    <>
      <Suspense key={term + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default WorksheetTable;
