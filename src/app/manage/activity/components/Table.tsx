import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetActivitiesRequestHandler } from "@/lib/services/activity/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface ActivityTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
}

const ActivityTable: React.FC<ActivityTableProps> = async (props) => {
  const { term, pageIndex, pageSize } = props;
  const activitys = (
    await GetActivitiesRequestHandler({
      term,
      pageIndex,
      pageSize,
    })
  ).data;
  if (!activitys) return notFound();
  const { items, totalPage } = activitys;

  return (
    <>
      <Suspense key={term + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default ActivityTable;
