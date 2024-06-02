import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetTeachingSlotsRequestHandler } from "@/lib/services/teachingSlot/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface TeachingSlotTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
}

const TeachingSlotTable: React.FC<TeachingSlotTableProps> = async (props) => {
  const { term, pageIndex, pageSize } = props;
  const teachingSlots = (
    await GetTeachingSlotsRequestHandler({
      term,
      pageIndex,
      pageSize,
    })
  ).data;
  if (!teachingSlots) return notFound();
  const { items, totalPage } = teachingSlots;

  return (
    <>
      <Suspense key={term + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default TeachingSlotTable;
