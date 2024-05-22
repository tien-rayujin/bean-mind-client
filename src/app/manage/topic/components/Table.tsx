import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetTopicsRequestHandler } from "@/lib/services/topic/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface TopicTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
}

const TopicTable: React.FC<TopicTableProps> = async (props) => {
  const { term, pageIndex, pageSize } = props;
  const topics = (
    await GetTopicsRequestHandler({
      term,
      pageIndex,
      pageSize,
    })
  ).data;
  if (!topics) return notFound();
  const { items, totalPage } = topics;

  return (
    <>
      <Suspense key={term + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default TopicTable;
