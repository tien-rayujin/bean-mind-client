import Breadcrumb from "@/components/Breadcrumb";
import { CreateSessionForm } from "../components/Form";
import { GetTeachingSlotsRequestHandler } from "@/lib/services/teachingSlot/Handlers";
import { notFound } from "next/navigation";
import { GetEnrollmentsRequestHandler } from "@/lib/services/enrollment/Handlers";

interface CreateSessionPageProps {}

const CreateSessionPage: React.FC<CreateSessionPageProps> = async (props) => {
  const payload = await Promise.all([
    GetTeachingSlotsRequestHandler({ pageSize: 20 }),
    GetEnrollmentsRequestHandler({ pageSize: 20 }),
  ]);
  const teachingSlots = payload[0].data?.items;
  const enrollments = payload[1].data?.items;

  if (!teachingSlots || !enrollments) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create session" />

      <CreateSessionForm
        payload={{
          teachingSlots: teachingSlots,
          enrollments: enrollments,
          lecturers: [],
        }}
      />
    </div>
  );
};

export default CreateSessionPage;
