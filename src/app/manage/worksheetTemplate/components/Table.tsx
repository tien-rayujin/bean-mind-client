import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetWorksheetTemplatesRequestHandler } from "@/lib/services/worksheetTemplate/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface WorksheetTemplateTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
}

const WorksheetTemplateTable: React.FC<WorksheetTemplateTableProps> = async (
  props,
) => {
  const { term, pageIndex, pageSize } = props;
  const worksheetTemplates = (
    await GetWorksheetTemplatesRequestHandler({
      term,
      pageIndex,
      pageSize,
    })
  ).data;
  if (!worksheetTemplates) return notFound();
  const { items, totalPage } = worksheetTemplates;

  return (
    <>
      <Suspense key={term + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default WorksheetTemplateTable;
