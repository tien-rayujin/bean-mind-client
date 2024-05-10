import { GetQuestionLevelRequestHandler } from "@/lib/services/questionLevel/Handlers";
import { DeleteQuestionLevelConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteQuestionLevelPageProps {
  params: { id: string };
}

const DeleteQuestionLevelPage: React.FC<DeleteQuestionLevelPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const questionLevel = (await GetQuestionLevelRequestHandler(id)).data;

  if (!questionLevel) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteQuestionLevelConfirm questionLevel={questionLevel} />
    </div>
  );
};

export default DeleteQuestionLevelPage;
