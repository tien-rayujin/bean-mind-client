import { GetActivityRequestHandler } from "@/lib/services/activity/Handlers";
import { DeleteActivityConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteActivityPageProps {
  params: { id: string };
}

const DeleteActivityPage: React.FC<DeleteActivityPageProps> = async (props) => {
  const { id } = props.params;
  const activity = (await GetActivityRequestHandler(id)).data;

  if (!activity) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteActivityConfirm activity={activity} />
    </div>
  );
};

export default DeleteActivityPage;
