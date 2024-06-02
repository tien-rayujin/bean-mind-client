import { GetTeachingSlotRequestHandler } from "@/lib/services/teachingSlot/Handlers";
import { RestoreTeachingSlotConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreTeachingSlotPageProps {
  params: { id: string };
}

const RestoreTeachingSlotPage: React.FC<RestoreTeachingSlotPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const teachingSlot = (await GetTeachingSlotRequestHandler(id)).data;

  if (!teachingSlot) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreTeachingSlotConfirm teachingSlot={teachingSlot} />
    </div>
  );
};

export default RestoreTeachingSlotPage;
