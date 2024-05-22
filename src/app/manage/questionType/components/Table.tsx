import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetQuestionTypesRequestHandler } from "@/lib/services/questionType/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface QuestionTypeTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
}

const QuestionTypeTable: React.FC<QuestionTypeTableProps> = async (props) => {
  const { term, pageIndex, pageSize } = props;
  const questionTypes = (
    await GetQuestionTypesRequestHandler({
      term,
      pageIndex,
      pageSize,
    })
  ).data;
  if (!questionTypes) return notFound();
  const { items, totalPage } = questionTypes;

  return (
    <>
      <Suspense key={term + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default QuestionTypeTable;
