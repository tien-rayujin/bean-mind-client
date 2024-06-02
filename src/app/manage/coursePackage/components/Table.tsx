import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetCoursePackagesRequestHandler } from "@/lib/services/coursePackage/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface CoursePackageTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
}

const CoursePackageTable: React.FC<CoursePackageTableProps> = async (props) => {
  const { term, pageIndex, pageSize } = props;
  const coursepackages = (
    await GetCoursePackagesRequestHandler({
      term,
      pageIndex,
      pageSize,
    })
  ).data;
  if (!coursepackages) return notFound();
  const { items, totalPage } = coursepackages;

  return (
    <>
      <Suspense key={term + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default CoursePackageTable;
