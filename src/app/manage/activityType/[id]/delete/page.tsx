import { GetActivityTypeRequestHandler } from "@/lib/services/activityType/Handlers";
import { DeleteActivityTypeConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteActivityTypePageProps {
  params: { id: string };
}

const DeleteActivityTypePage: React.FC<DeleteActivityTypePageProps> = async (
  props,
) => {
  const { id } = props.params;
  const activityType = (await GetActivityTypeRequestHandler(id)).data;

  if (!activityType) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteActivityTypeConfirm activityType={activityType} />
    </div>
  );
};

export default DeleteActivityTypePage;
