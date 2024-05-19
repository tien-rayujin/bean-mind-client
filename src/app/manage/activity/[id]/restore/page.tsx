import { GetActivityRequestHandler } from "@/lib/services/activity/Handlers";
import { RestoreActivityConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreActivityPageProps {
  params: { id: string };
}

const RestoreActivityPage: React.FC<RestoreActivityPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const activity = (await GetActivityRequestHandler(id)).data;

  if (!activity) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreActivityConfirm activity={activity} />
    </div>
  );
};

export default RestoreActivityPage;
