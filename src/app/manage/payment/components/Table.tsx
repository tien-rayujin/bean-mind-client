import TableThree from "@/components/Table";
import { columns } from "./TableColumnDefinition";
import { GetPaymentsRequestHandler } from "@/lib/services/payment/Handlers";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { notFound } from "next/navigation";
import Pagination from "@/components/Pagination";

interface PaymentTableProps {
  pageIndex: number;
  pageSize: number;
  term: string;
}

const PaymentTable: React.FC<PaymentTableProps> = async (props) => {
  const { term, pageIndex, pageSize } = props;
  const payments = (
    await GetPaymentsRequestHandler({
      term,
      pageIndex,
      pageSize,
    })
  ).data;
  if (!payments) return notFound();
  const { items, totalPage } = payments;

  return (
    <>
      <Suspense key={term + pageIndex} fallback={<Loader />}>
        <TableThree columns={columns} objData={items} />
      </Suspense>

      <Pagination page={pageIndex} totalPage={totalPage} />
    </>
  );
};

export default PaymentTable;
