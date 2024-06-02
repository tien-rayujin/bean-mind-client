import { GetPaymentRequestHandler } from "@/lib/services/payment/Handlers";
import { RestorePaymentConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestorePaymentPageProps {
  params: { id: string };
}

const RestorePaymentPage: React.FC<RestorePaymentPageProps> = async (props) => {
  const { id } = props.params;
  const payment = (await GetPaymentRequestHandler(id)).data;

  if (!payment) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestorePaymentConfirm payment={payment} />
    </div>
  );
};

export default RestorePaymentPage;
