import Breadcrumb from "@/components/Breadcrumb";
import { CreateQuestionForm } from "../components/Form";
import { GetQuestionTypesRequestHandler } from "@/lib/services/questionType/Handlers";
import { GetQuestionLevelsRequestHandler } from "@/lib/services/questionLevel/Handlers";
import { notFound } from "next/navigation";
import { GetTopicsRequestHandler } from "@/lib/services/topic/Handlers";

interface CreateQuestionPageProps {}

const CreateQuestionPage: React.FC<CreateQuestionPageProps> = async (props) => {
  const payload = await Promise.all([
    GetQuestionTypesRequestHandler({ pageSize: 20 }),
    GetQuestionLevelsRequestHandler({ pageSize: 20 }),
    GetTopicsRequestHandler({ pageSize: 20 }),
  ]);
  const questionTypes = payload[0].data?.items;
  const questionLevels = payload[1].data?.items;
  const topics = payload[2].data?.items;

  if (!questionTypes || !questionLevels || !topics) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create question" />

      <CreateQuestionForm
        payload={{
          questionTypes: questionTypes,
          questionLevels: questionLevels,
          topics: topics,
        }}
      />
    </div>
  );
};

export default CreateQuestionPage;
