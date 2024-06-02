import { GetSlotRequestHandler } from "@/lib/services/slot/Handlers";
import { DeleteSlotConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteSlotPageProps {
  params: { id: string };
}

const DeleteSlotPage: React.FC<DeleteSlotPageProps> = async (props) => {
  const { id } = props.params;
  const slot = (await GetSlotRequestHandler(id)).data;

  if (!slot) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteSlotConfirm slot={slot} />
    </div>
  );
};

export default DeleteSlotPage;
