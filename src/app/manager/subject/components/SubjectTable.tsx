import Pagination from "@/components/Pagination";
import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetSubjectsRequestHandler } from "@/lib/services/subject/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";

interface SubjectTableProps {
  pageIndex: number;
  pageSize: number;
}

const SubjectTable: React.FC<SubjectTableProps> = async (props) => {
  const { pageIndex, pageSize } = props;

  const subjects = (
    await GetSubjectsRequestHandler({
      pageIndex,
      pageSize,
    })
  ).data;
  const items = subjects?.items;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>
      <Pagination page={pageIndex} totalPage={pageSize} />
    </>
  );
};

export default SubjectTable;
