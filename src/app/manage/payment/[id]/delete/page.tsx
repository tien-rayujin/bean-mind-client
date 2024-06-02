import { GetPaymentRequestHandler } from "@/lib/services/payment/Handlers";
import { DeletePaymentConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeletePaymentPageProps {
  params: { id: string };
}

const DeletePaymentPage: React.FC<DeletePaymentPageProps> = async (props) => {
  const { id } = props.params;
  const payment = (await GetPaymentRequestHandler(id)).data;

  if (!payment) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeletePaymentConfirm payment={payment} />
    </div>
  );
};

export default DeletePaymentPage;
