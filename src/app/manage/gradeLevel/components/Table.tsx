import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetGradeLevelsRequestHandler } from "@/lib/services/gradeLevel/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface GradeLevelTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
  isDeleted: string;
}

const GradeLevelTable: React.FC<GradeLevelTableProps> = async (props) => {
  const { term, pageIndex, pageSize, isDeleted } = props;
  const gradelevels = (await GetGradeLevelsRequestHandler({ ...props })).data;
  if (!gradelevels) return notFound();
  const { items, totalPage } = gradelevels;

  return (
    <>
      <Suspense key={term + isDeleted + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default GradeLevelTable;
