import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetSlotsRequestHandler } from "@/lib/services/slot/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface SlotTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
  isDeleted: string;
}

const SlotTable: React.FC<SlotTableProps> = async (props) => {
  const { term, pageIndex, pageSize, isDeleted } = props;
  const slots = (await GetSlotsRequestHandler({ ...props })).data;
  if (!slots) return notFound();
  const { items, totalPage } = slots;

  return (
    <>
      <Suspense key={term + isDeleted + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default SlotTable;
