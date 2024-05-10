import { GetQuestionLevelRequestHandler } from "@/lib/services/questionLevel/Handlers";
import { UpdateQuestionLevelForm } from "@/app/manage/questionLevel/components/Form";
import { notFound } from "next/navigation";

interface UpdateQuestionLevelPageProps {
  params: { id: string };
}

const UpdateQuestionLevelPage: React.FC<UpdateQuestionLevelPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const questionLevel = (await GetQuestionLevelRequestHandler(id)).data;

  if (!questionLevel) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateQuestionLevelForm questionLevel={questionLevel} />
    </div>
  );
};

export default UpdateQuestionLevelPage;
