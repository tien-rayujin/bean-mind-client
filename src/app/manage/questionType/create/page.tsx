import Breadcrumb from "@/components/Breadcrumb";
import { CreateQuestionTypeForm } from "../components/Form";

interface CreateQuestionTypePageProps {}

const CreateQuestionTypePage: React.FC<CreateQuestionTypePageProps> = (
  props,
) => {
  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create questionType" />

      <CreateQuestionTypeForm />
    </div>
  );
};

export default CreateQuestionTypePage;
