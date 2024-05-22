import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetQuestionsRequestHandler } from "@/lib/services/question/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface QuestionTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
}

const QuestionTable: React.FC<QuestionTableProps> = async (props) => {
  const { term, pageIndex, pageSize } = props;
  const questions = (
    await GetQuestionsRequestHandler({
      term,
      pageIndex,
      pageSize,
    })
  ).data;
  if (!questions) return notFound();
  const { items, totalPage } = questions;

  return (
    <>
      <Suspense key={term + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default QuestionTable;
