import { GetQuestionTypeRequestHandler } from "@/lib/services/questionType/Handlers";
import { UpdateQuestionTypeForm } from "@/app/manage/questionType/components/Form";
import { notFound } from "next/navigation";

interface UpdateQuestionTypePageProps {
  params: { id: string };
}

const UpdateQuestionTypePage: React.FC<UpdateQuestionTypePageProps> = async (
  props,
) => {
  const { id } = props.params;
  const questionType = (await GetQuestionTypeRequestHandler(id)).data;

  if (!questionType) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateQuestionTypeForm questionType={questionType} />
    </div>
  );
};

export default UpdateQuestionTypePage;
