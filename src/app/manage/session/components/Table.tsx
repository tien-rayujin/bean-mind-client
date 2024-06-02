import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetSessionsRequestHandler } from "@/lib/services/session/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface SessionTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
}

const SessionTable: React.FC<SessionTableProps> = async (props) => {
  const { term, pageIndex, pageSize } = props;
  const sessions = (
    await GetSessionsRequestHandler({
      term,
      pageIndex,
      pageSize,
    })
  ).data;
  if (!sessions) return notFound();
  const { items, totalPage } = sessions;

  return (
    <>
      <Suspense key={term + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default SessionTable;
