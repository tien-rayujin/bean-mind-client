import Breadcrumb from "@/components/Breadcrumb";
import { CreateEnrollmentForm } from "../components/Form";
import { GetPackageOrdersRequestHandler } from "@/lib/services/packageOrder/Handlers";
import { notFound } from "next/navigation";

interface CreateEnrollmentPageProps {}

const CreateEnrollmentPage: React.FC<CreateEnrollmentPageProps> = async (
  props,
) => {
  const payload = await Promise.all([
    GetPackageOrdersRequestHandler({ pageSize: 20 }),
  ]);
  const packageOrders = payload[0].data?.items;

  if (!packageOrders) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create enrollment" />

      <CreateEnrollmentForm
        payload={{
          packageOrders: packageOrders,
          lecturers: [],
          students: [],
        }}
      />
    </div>
  );
};

export default CreateEnrollmentPage;
