import Breadcrumb from "@/components/Breadcrumb";
import { CreateGradeLevelForm } from "../components/Form";

interface CreateGradeLevelPageProps {}

const CreateGradeLevelPage: React.FC<CreateGradeLevelPageProps> = (props) => {
  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create gradelevel" />

      <CreateGradeLevelForm />
    </div>
  );
};

export default CreateGradeLevelPage;
