import { GetTeachingSlotRequestHandler } from "@/lib/services/teachingSlot/Handlers";
import { DeleteTeachingSlotConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteTeachingSlotPageProps {
  params: { id: string };
}

const DeleteTeachingSlotPage: React.FC<DeleteTeachingSlotPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const teachingSlot = (await GetTeachingSlotRequestHandler(id)).data;

  if (!teachingSlot) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteTeachingSlotConfirm teachingSlot={teachingSlot} />
    </div>
  );
};

export default DeleteTeachingSlotPage;
