import { GetPackageOrderRequestHandler } from "@/lib/services/packageOrder/Handlers";
import { UpdatePackageOrderForm } from "@/app/manage/packageOrder/components/Form";
import { notFound } from "next/navigation";
import { GetPackagesRequestHandler } from "@/lib/services/package/Handlers";

interface UpdatePackageOrderPageProps {
  params: { id: string };
}

const UpdatePackageOrderPage: React.FC<UpdatePackageOrderPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const packageorder = (await GetPackageOrderRequestHandler(id)).data;
  const payload = await Promise.all([
    GetPackagesRequestHandler({ pageSize: 20 }),
  ]);
  const packages = payload[0].data?.items;

  if (!packageorder || !packages) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdatePackageOrderForm
        packageorder={packageorder}
        payload={{
          packages: packages,
        }}
      />
    </div>
  );
};

export default UpdatePackageOrderPage;
