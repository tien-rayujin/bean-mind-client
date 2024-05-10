import { GetQuestionTypeRequestHandler } from "@/lib/services/questionType/Handlers";
import { RestoreQuestionTypeConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreQuestionTypePageProps {
  params: { id: string };
}

const RestoreQuestionTypePage: React.FC<RestoreQuestionTypePageProps> = async (
  props,
) => {
  const { id } = props.params;
  const questionType = (await GetQuestionTypeRequestHandler(id)).data;

  if (!questionType) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreQuestionTypeConfirm questionType={questionType} />
    </div>
  );
};

export default RestoreQuestionTypePage;
