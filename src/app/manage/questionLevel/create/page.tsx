import Breadcrumb from "@/components/Breadcrumb";
import { CreateQuestionLevelForm } from "../components/Form";

interface CreateQuestionLevelPageProps {}

const CreateQuestionLevelPage: React.FC<CreateQuestionLevelPageProps> = (
  props,
) => {
  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create questionLevel" />

      <CreateQuestionLevelForm />
    </div>
  );
};

export default CreateQuestionLevelPage;
