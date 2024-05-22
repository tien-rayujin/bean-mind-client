import Breadcrumb from "@/components/Breadcrumb";
import { CreateTopicForm } from "../components/Form";
import { GetChaptersRequestHandler } from "@/lib/services/chapter/Handlers";

interface CreateTopicPageProps {}

const CreateTopicPage: React.FC<CreateTopicPageProps> = async (props) => {
  const chapters = (await GetChaptersRequestHandler({ pageSize: 20 })).data
    ?.items;
  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create topic" />

      <CreateTopicForm payload={chapters} />
    </div>
  );
};

export default CreateTopicPage;
