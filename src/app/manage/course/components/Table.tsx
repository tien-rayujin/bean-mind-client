import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetCoursesRequestHandler } from "@/lib/services/course/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface CourseTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
}

const CourseTable: React.FC<CourseTableProps> = async (props) => {
  const { term, pageIndex, pageSize } = props;
  const courses = (
    await GetCoursesRequestHandler({
      term,
      pageIndex,
      pageSize,
    })
  ).data;
  if (!courses) return notFound();
  const { items, totalPage } = courses;

  return (
    <>
      <Suspense key={term + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default CourseTable;
