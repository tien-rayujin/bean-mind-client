import Breadcrumb from "@/components/Breadcrumb";
import { CreateTeachingSlotForm } from "../components/Form";
import { GetSlotsRequestHandler } from "@/lib/services/slot/Handlers";
import { notFound } from "next/navigation";
import { GetGradeLevelsRequestHandler } from "@/lib/services/gradeLevel/Handlers";

interface CreateTeachingSlotPageProps {}

const CreateTeachingSlotPage: React.FC<CreateTeachingSlotPageProps> = async (
  props,
) => {
  const payload = await Promise.all([
    GetSlotsRequestHandler({ pageSize: 20 }),
    GetGradeLevelsRequestHandler({ pageSize: 20 }),
  ]);
  const slots = payload[0].data?.items;
  const gradeLevels = payload[1].data?.items;

  if (!slots || !gradeLevels) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create teachingSlot" />

      <CreateTeachingSlotForm
        payload={{
          slots: slots,
          gradeLevels: gradeLevels,
          lecturers: [],
        }}
      />
    </div>
  );
};

export default CreateTeachingSlotPage;
