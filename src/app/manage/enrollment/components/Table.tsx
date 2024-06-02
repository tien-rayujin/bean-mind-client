import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetEnrollmentsRequestHandler } from "@/lib/services/enrollment/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface EnrollmentTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
}

const EnrollmentTable: React.FC<EnrollmentTableProps> = async (props) => {
  const { term, pageIndex, pageSize } = props;
  const enrollments = (
    await GetEnrollmentsRequestHandler({
      term,
      pageIndex,
      pageSize,
    })
  ).data;
  if (!enrollments) return notFound();
  const { items, totalPage } = enrollments;

  return (
    <>
      <Suspense key={term + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default EnrollmentTable;
