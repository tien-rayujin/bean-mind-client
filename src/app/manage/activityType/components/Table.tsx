import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetActivityTypesRequestHandler } from "@/lib/services/activityType/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface ActivityTypeTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
}

const ActivityTypeTable: React.FC<ActivityTypeTableProps> = async (props) => {
  const { term, pageIndex, pageSize } = props;
  const activityTypes = (
    await GetActivityTypesRequestHandler({
      term,
      pageIndex,
      pageSize,
    })
  ).data;
  if (!activityTypes) return notFound();
  const { items, totalPage } = activityTypes;

  return (
    <>
      <Suspense key={term + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default ActivityTypeTable;
