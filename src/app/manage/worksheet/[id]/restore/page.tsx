import { GetWorksheetRequestHandler } from "@/lib/services/worksheet/Handlers";
import { RestoreWorksheetConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreWorksheetPageProps {
  params: { id: string };
}

const RestoreWorksheetPage: React.FC<RestoreWorksheetPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const worksheet = (await GetWorksheetRequestHandler(id)).data;

  if (!worksheet) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreWorksheetConfirm worksheet={worksheet} />
    </div>
  );
};

export default RestoreWorksheetPage;
