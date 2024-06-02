import { GetPackageOrderRequestHandler } from "@/lib/services/packageOrder/Handlers";
import { RestorePackageOrderConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestorePackageOrderPageProps {
  params: { id: string };
}

const RestorePackageOrderPage: React.FC<RestorePackageOrderPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const packageorder = (await GetPackageOrderRequestHandler(id)).data;

  if (!packageorder) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestorePackageOrderConfirm packageorder={packageorder} />
    </div>
  );
};

export default RestorePackageOrderPage;
