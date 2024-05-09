import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetChaptersRequestHandler } from "@/lib/services/chapter/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface ChapterTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
}

const ChapterTable: React.FC<ChapterTableProps> = async (props) => {
  const { term, pageIndex, pageSize } = props;
  const chapters = (
    await GetChaptersRequestHandler({
      term,
      pageIndex,
      pageSize,
    })
  ).data;
  if (!chapters) return notFound();
  const { items, totalPage } = chapters;

  return (
    <>
      <Suspense key={term + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default ChapterTable;
