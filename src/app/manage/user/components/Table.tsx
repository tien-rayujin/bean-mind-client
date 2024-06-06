import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetUsersRequestHandler } from "@/lib/services/user/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface UserTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
  isDeleted: string;
}

const UserTable: React.FC<UserTableProps> = async (props) => {
  const { term, pageIndex, pageSize, isDeleted } = props;
  const users = (await GetUsersRequestHandler({ ...props })).data;
  if (!users) return notFound();
  const { items, totalPage } = users;

  return (
    <>
      <Suspense key={term + isDeleted + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default UserTable;
