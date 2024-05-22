import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetQuestionLevelsRequestHandler } from "@/lib/services/questionLevel/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface QuestionLevelTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
}

const QuestionLevelTable: React.FC<QuestionLevelTableProps> = async (props) => {
  const { term, pageIndex, pageSize } = props;
  const questionLevels = (
    await GetQuestionLevelsRequestHandler({
      term,
      pageIndex,
      pageSize,
    })
  ).data;
  if (!questionLevels) return notFound();
  const { items, totalPage } = questionLevels;

  return (
    <>
      <Suspense key={term + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default QuestionLevelTable;
