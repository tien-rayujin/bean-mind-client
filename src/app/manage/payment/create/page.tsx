import Breadcrumb from "@/components/Breadcrumb";
import { CreatePaymentForm } from "../components/Form";
import { GetPackageOrdersRequestHandler } from "@/lib/services/packageOrder/Handlers";
import { notFound } from "next/navigation";

interface CreatePaymentPageProps {}

const CreatePaymentPage: React.FC<CreatePaymentPageProps> = async (props) => {
  const payload = await Promise.all([
    GetPackageOrdersRequestHandler({ pageSize: 20 }),
  ]);
  const packageOrders = payload[0].data?.items;

  if (!packageOrders) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create payment" />

      <CreatePaymentForm
        payload={{
          packageOrders: packageOrders,
        }}
      />
    </div>
  );
};

export default CreatePaymentPage;
