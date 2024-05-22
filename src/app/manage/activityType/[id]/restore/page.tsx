import { GetActivityTypeRequestHandler } from "@/lib/services/activityType/Handlers";
import { RestoreActivityTypeConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreActivityTypePageProps {
  params: { id: string };
}

const RestoreActivityTypePage: React.FC<RestoreActivityTypePageProps> = async (
  props,
) => {
  const { id } = props.params;
  const activityType = (await GetActivityTypeRequestHandler(id)).data;

  if (!activityType) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreActivityTypeConfirm activityType={activityType} />
    </div>
  );
};

export default RestoreActivityTypePage;
