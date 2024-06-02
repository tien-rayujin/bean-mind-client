import { GetEnrollmentRequestHandler } from "@/lib/services/enrollment/Handlers";
import { UpdateEnrollmentForm } from "@/app/manage/enrollment/components/Form";
import { notFound } from "next/navigation";
import { GetPackageOrdersRequestHandler } from "@/lib/services/packageOrder/Handlers";

interface UpdateEnrollmentPageProps {
  params: { id: string };
}

const UpdateEnrollmentPage: React.FC<UpdateEnrollmentPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const enrollment = (await GetEnrollmentRequestHandler(id)).data;
  const payload = await Promise.all([
    GetPackageOrdersRequestHandler({ pageSize: 20 }),
  ]);
  const packageOrders = payload[0].data?.items;

  if (!enrollment || !packageOrders) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateEnrollmentForm
        enrollment={enrollment}
        payload={{
          packageOrders: packageOrders,
          lecturers: [],
          students: [],
        }}
      />
    </div>
  );
};

export default UpdateEnrollmentPage;
