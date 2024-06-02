import { GetTeachingSlotRequestHandler } from "@/lib/services/teachingSlot/Handlers";
import { UpdateTeachingSlotForm } from "@/app/manage/teachingSlot/components/Form";
import { notFound } from "next/navigation";
import { GetSlotsRequestHandler } from "@/lib/services/slot/Handlers";
import { GetGradeLevelsRequestHandler } from "@/lib/services/gradeLevel/Handlers";

interface UpdateTeachingSlotPageProps {
  params: { id: string };
}

const UpdateTeachingSlotPage: React.FC<UpdateTeachingSlotPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const teachingSlot = (await GetTeachingSlotRequestHandler(id)).data;
  const payload = await Promise.all([
    GetSlotsRequestHandler({ pageSize: 20 }),
    GetGradeLevelsRequestHandler({ pageSize: 20 }),
  ]);
  const slots = payload[0].data?.items;
  const gradeLevels = payload[1].data?.items;

  if (!teachingSlot || !slots || !gradeLevels) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateTeachingSlotForm
        teachingSlot={teachingSlot}
        payload={{
          slots: slots,
          gradeLevels: gradeLevels,
          lecturers: [],
        }}
      />
    </div>
  );
};

export default UpdateTeachingSlotPage;
