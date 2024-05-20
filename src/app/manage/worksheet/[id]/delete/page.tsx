import { GetWorksheetRequestHandler } from "@/lib/services/worksheet/Handlers";
import { DeleteWorksheetConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteWorksheetPageProps {
  params: { id: string };
}

const DeleteWorksheetPage: React.FC<DeleteWorksheetPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const worksheet = (await GetWorksheetRequestHandler(id)).data;

  if (!worksheet) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteWorksheetConfirm worksheet={worksheet} />
    </div>
  );
};

export default DeleteWorksheetPage;
