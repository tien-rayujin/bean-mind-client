import { GetPackageOrderRequestHandler } from "@/lib/services/packageOrder/Handlers";
import { DeletePackageOrderConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeletePackageOrderPageProps {
  params: { id: string };
}

const DeletePackageOrderPage: React.FC<DeletePackageOrderPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const packageorder = (await GetPackageOrderRequestHandler(id)).data;

  if (!packageorder) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeletePackageOrderConfirm packageorder={packageorder} />
    </div>
  );
};

export default DeletePackageOrderPage;
