import { GetQuestionLevelRequestHandler } from "@/lib/services/questionLevel/Handlers";
import { RestoreQuestionLevelConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreQuestionLevelPageProps {
  params: { id: string };
}

const RestoreQuestionLevelPage: React.FC<
  RestoreQuestionLevelPageProps
> = async (props) => {
  const { id } = props.params;
  const questionLevel = (await GetQuestionLevelRequestHandler(id)).data;

  if (!questionLevel) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreQuestionLevelConfirm questionLevel={questionLevel} />
    </div>
  );
};

export default RestoreQuestionLevelPage;
