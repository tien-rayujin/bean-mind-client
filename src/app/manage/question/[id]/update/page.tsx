import { GetQuestionRequestHandler } from "@/lib/services/question/Handlers";
import { UpdateQuestionForm } from "@/app/manage/question/components/Form";
import { notFound } from "next/navigation";
import { GetQuestionTypesRequestHandler } from "@/lib/services/questionType/Handlers";
import { GetQuestionLevelsRequestHandler } from "@/lib/services/questionLevel/Handlers";
import { GetTopicsRequestHandler } from "@/lib/services/topic/Handlers";

interface UpdateQuestionPageProps {
  params: { id: string };
}

const UpdateQuestionPage: React.FC<UpdateQuestionPageProps> = async (props) => {
  const { id } = props.params;
  const question = (await GetQuestionRequestHandler(id)).data;
  const payload = await Promise.all([
    GetQuestionTypesRequestHandler({ pageSize: 20 }),
    GetQuestionLevelsRequestHandler({ pageSize: 20 }),
    GetTopicsRequestHandler({ pageSize: 20 }),
  ]);
  const questionTypes = payload[0].data?.items;
  const questionLevels = payload[1].data?.items;
  const topics = payload[2].data?.items;

  if (!question || !questionTypes || !questionLevels || !topics)
    return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateQuestionForm
        question={question}
        payload={{
          questionTypes: questionTypes,
          questionLevels: questionLevels,
          topics: topics,
        }}
      />
    </div>
  );
};

export default UpdateQuestionPage;
