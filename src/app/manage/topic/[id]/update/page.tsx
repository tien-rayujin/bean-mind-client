import { GetTopicRequestHandler } from "@/lib/services/topic/Handlers";
import { UpdateTopicForm } from "@/app/manage/topic/components/Form";
import { notFound } from "next/navigation";
import { GetChaptersRequestHandler } from "@/lib/services/chapter/Handlers";

interface UpdateTopicPageProps {
  params: { id: string };
}

const UpdateTopicPage: React.FC<UpdateTopicPageProps> = async (props) => {
  const { id } = props.params;
  const topic = (await GetTopicRequestHandler(id)).data;
  const chapters = (await GetChaptersRequestHandler({ pageSize: 20 })).data
    ?.items;

  if (!topic) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateTopicForm topic={topic} payload={chapters} />
    </div>
  );
};

export default UpdateTopicPage;
