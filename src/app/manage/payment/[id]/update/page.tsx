import { GetPaymentRequestHandler } from "@/lib/services/payment/Handlers";
import { UpdatePaymentForm } from "@/app/manage/payment/components/Form";
import { notFound } from "next/navigation";
import { GetPackageOrdersRequestHandler } from "@/lib/services/packageOrder/Handlers";

interface UpdatePaymentPageProps {
  params: { id: string };
}

const UpdatePaymentPage: React.FC<UpdatePaymentPageProps> = async (props) => {
  const { id } = props.params;
  const payment = (await GetPaymentRequestHandler(id)).data;
  const payload = await Promise.all([
    GetPackageOrdersRequestHandler({ pageSize: 20 }),
  ]);
  const packageOrders = payload[0].data?.items;

  if (!payment || !packageOrders) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdatePaymentForm
        payment={payment}
        payload={{
          packageOrders: packageOrders,
        }}
      />
    </div>
  );
};

export default UpdatePaymentPage;
