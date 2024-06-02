import { GetSessionRequestHandler } from "@/lib/services/session/Handlers";
import { UpdateSessionForm } from "@/app/manage/session/components/Form";
import { notFound } from "next/navigation";
import { GetTeachingSlotsRequestHandler } from "@/lib/services/teachingSlot/Handlers";
import { GetEnrollmentsRequestHandler } from "@/lib/services/enrollment/Handlers";

interface UpdateSessionPageProps {
  params: { id: string };
}

const UpdateSessionPage: React.FC<UpdateSessionPageProps> = async (props) => {
  const { id } = props.params;
  const session = (await GetSessionRequestHandler(id)).data;
  const payload = await Promise.all([
    GetTeachingSlotsRequestHandler({ pageSize: 20 }),
    GetEnrollmentsRequestHandler({ pageSize: 20 }),
  ]);
  const teachingSlots = payload[0].data?.items;
  const enrollments = payload[1].data?.items;

  if (!session || !teachingSlots || !enrollments) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateSessionForm
        session={session}
        payload={{
          teachingSlots: teachingSlots,
          enrollments: enrollments,
          lecturers: [],
        }}
      />
    </div>
  );
};

export default UpdateSessionPage;
