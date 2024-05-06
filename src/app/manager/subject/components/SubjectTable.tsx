import Pagination from "@/components/Pagination";
import TableThree from "@/components/Table";
import { seed_Subjects } from "@/lib/seed";
import { columns } from "./TableColumnDefinition";

interface SubjectTableProps {
  pageIndex: number;
  pageSize: number;
}

const SubjectTable: React.FC<SubjectTableProps> = (props) => {
  const { pageIndex, pageSize } = props;

  return (
    <>
      <TableThree columns={columns} objData={seed_Subjects} />
      <Pagination page={pageIndex} totalPage={pageSize} />
    </>
  );
};

export default SubjectTable;
