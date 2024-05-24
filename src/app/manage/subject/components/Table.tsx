import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetSubjectsRequestHandler } from "@/lib/services/subject/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface SubjectTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
  isDeleted: string;
}

const SubjectTable: React.FC<SubjectTableProps> = async (props) => {
  const { term, pageIndex, pageSize, isDeleted } = props;
  const subjects = (await GetSubjectsRequestHandler({ ...props })).data;
  if (!subjects) return notFound();
  const { items, totalPage } = subjects;

  return (
    <>
      <Suspense key={term + isDeleted + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default SubjectTable;
