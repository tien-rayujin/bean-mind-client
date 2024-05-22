import Breadcrumb from "@/components/Breadcrumb";
import { CreateActivityForm } from "../components/Form";
import { GetTopicsRequestHandler } from "@/lib/services/topic/Handlers";
import { GetActivityTypesRequestHandler } from "@/lib/services/activityType/Handlers";
import { notFound } from "next/navigation";

interface CreateActivityPageProps {}

const CreateActivityPage: React.FC<CreateActivityPageProps> = async (props) => {
  const payload = await Promise.all([
    GetActivityTypesRequestHandler({ pageSize: 20 }),
    GetTopicsRequestHandler({ pageSize: 20 }),
  ]);
  const activityTypes = payload[0].data?.items;
  const topics = payload[1].data?.items;

  if (!activityTypes || !topics) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create activity" />

      <CreateActivityForm
        payload={{
          activityType: activityTypes,
          topics: topics,
        }}
      />
    </div>
  );
};

export default CreateActivityPage;
