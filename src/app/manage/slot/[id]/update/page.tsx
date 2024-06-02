import { GetSlotRequestHandler } from "@/lib/services/slot/Handlers";
import { UpdateSlotForm } from "@/app/manage/slot/components/Form";
import { notFound } from "next/navigation";

interface UpdateSlotPageProps {
  params: { id: string };
}

const UpdateSlotPage: React.FC<UpdateSlotPageProps> = async (props) => {
  const { id } = props.params;
  const slot = (await GetSlotRequestHandler(id)).data;

  if (!slot) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateSlotForm slot={slot} />
    </div>
  );
};

export default UpdateSlotPage;
