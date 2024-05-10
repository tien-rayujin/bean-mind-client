import { GetQuestionRequestHandler } from "@/lib/services/question/Handlers";
import { RestoreQuestionConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreQuestionPageProps {
  params: { id: string };
}

const RestoreQuestionPage: React.FC<RestoreQuestionPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const question = (await GetQuestionRequestHandler(id)).data;

  if (!question) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreQuestionConfirm question={question} />
    </div>
  );
};

export default RestoreQuestionPage;
