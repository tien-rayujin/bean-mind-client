import { GetTopicRequestHandler } from "@/lib/services/topic/Handlers";
import { RestoreTopicConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreTopicPageProps {
  params: { id: string };
}

const RestoreTopicPage: React.FC<RestoreTopicPageProps> = async (props) => {
  const { id } = props.params;
  const topic = (await GetTopicRequestHandler(id)).data;

  if (!topic) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreTopicConfirm topic={topic} />
    </div>
  );
};

export default RestoreTopicPage;
