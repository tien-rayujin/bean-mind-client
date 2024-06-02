import Breadcrumb from "@/components/Breadcrumb";
import { CreatePackageOrderForm } from "../components/Form";
import { GetPackagesRequestHandler } from "@/lib/services/package/Handlers";
import { notFound } from "next/navigation";

interface CreatePackageOrderPageProps {}

const CreatePackageOrderPage: React.FC<CreatePackageOrderPageProps> = async (
  props,
) => {
  const payload = await Promise.all([
    GetPackagesRequestHandler({ pageSize: 20 }),
  ]);
  const packages = payload[0].data?.items;

  if (!packages) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create packageorder" />

      <CreatePackageOrderForm
        payload={{
          packages: packages,
        }}
      />
    </div>
  );
};

export default CreatePackageOrderPage;
