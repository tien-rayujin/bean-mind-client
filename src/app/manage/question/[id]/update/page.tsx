import { GetQuestionRequestHandler } from "@/lib/services/question/Handlers";
import { UpdateQuestionForm } from "@/app/manage/question/components/Form";
import { notFound } from "next/navigation";
import { GetQuestionTypesRequestHandler } from "@/lib/services/questionType/Handlers";

interface UpdateQuestionPageProps {
  params: { id: string };
}

const UpdateQuestionPage: React.FC<UpdateQuestionPageProps> = async (props) => {
  const { id } = props.params;
  const question = (await GetQuestionRequestHandler(id)).data;
  const questionTypes = (await GetQuestionTypesRequestHandler({ pageSize: 20 }))
    .data?.items;

  if (!question) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateQuestionForm question={question} payload={questionTypes} />
    </div>
  );
};

export default UpdateQuestionPage;
