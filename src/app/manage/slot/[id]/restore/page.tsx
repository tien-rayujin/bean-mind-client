import { GetSlotRequestHandler } from "@/lib/services/slot/Handlers";
import { RestoreSlotConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreSlotPageProps {
  params: { id: string };
}

const RestoreSlotPage: React.FC<RestoreSlotPageProps> = async (props) => {
  const { id } = props.params;
  const slot = (await GetSlotRequestHandler(id)).data;

  if (!slot) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreSlotConfirm slot={slot} />
    </div>
  );
};

export default RestoreSlotPage;
