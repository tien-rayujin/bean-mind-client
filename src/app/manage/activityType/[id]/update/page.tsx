import { GetActivityTypeRequestHandler } from "@/lib/services/activityType/Handlers";
import { UpdateActivityTypeForm } from "@/app/manage/activityType/components/Form";
import { notFound } from "next/navigation";

interface UpdateActivityTypePageProps {
  params: { id: string };
}

const UpdateActivityTypePage: React.FC<UpdateActivityTypePageProps> = async (
  props,
) => {
  const { id } = props.params;
  const activityType = (await GetActivityTypeRequestHandler(id)).data;

  if (!activityType) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateActivityTypeForm activityType={activityType} />
    </div>
  );
};

export default UpdateActivityTypePage;
