import { GetTopicRequestHandler } from "@/lib/services/topic/Handlers";
import { DeleteTopicConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteTopicPageProps {
  params: { id: string };
}

const DeleteTopicPage: React.FC<DeleteTopicPageProps> = async (props) => {
  const { id } = props.params;
  const topic = (await GetTopicRequestHandler(id)).data;

  if (!topic) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteTopicConfirm topic={topic} />
    </div>
  );
};

export default DeleteTopicPage;
