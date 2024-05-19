import { GetActivityRequestHandler } from "@/lib/services/activity/Handlers";
import { UpdateActivityForm } from "@/app/manage/activity/components/Form";
import { notFound } from "next/navigation";
import { GetTopicsRequestHandler } from "@/lib/services/topic/Handlers";
import { GetActivityTypesRequestHandler } from "@/lib/services/activityType/Handlers";

interface UpdateActivityPageProps {
  params: { id: string };
}

const UpdateActivityPage: React.FC<UpdateActivityPageProps> = async (props) => {
  const { id } = props.params;
  const activity = (await GetActivityRequestHandler(id)).data;

  const payload = await Promise.all([
    GetActivityTypesRequestHandler({ pageSize: 20 }),
    GetTopicsRequestHandler({ pageSize: 20 }),
  ]);
  const activityTypes = payload[0].data?.items;
  const topics = payload[1].data?.items;

  if (!activity || !activityTypes || !topics) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateActivityForm
        activity={activity}
        payload={{
          activityType: activityTypes,
          topics: topics,
        }}
      />
    </div>
  );
};

export default UpdateActivityPage;
