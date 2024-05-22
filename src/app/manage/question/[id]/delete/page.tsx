import { GetQuestionRequestHandler } from "@/lib/services/question/Handlers";
import { DeleteQuestionConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteQuestionPageProps {
  params: { id: string };
}

const DeleteQuestionPage: React.FC<DeleteQuestionPageProps> = async (props) => {
  const { id } = props.params;
  const question = (await GetQuestionRequestHandler(id)).data;

  if (!question) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteQuestionConfirm question={question} />
    </div>
  );
};

export default DeleteQuestionPage;
