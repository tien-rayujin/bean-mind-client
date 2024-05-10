import { GetQuestionTypeRequestHandler } from "@/lib/services/questionType/Handlers";
import { DeleteQuestionTypeConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteQuestionTypePageProps {
  params: { id: string };
}

const DeleteQuestionTypePage: React.FC<DeleteQuestionTypePageProps> = async (
  props,
) => {
  const { id } = props.params;
  const questionType = (await GetQuestionTypeRequestHandler(id)).data;

  if (!questionType) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteQuestionTypeConfirm questionType={questionType} />
    </div>
  );
};

export default DeleteQuestionTypePage;
