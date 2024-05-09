import Breadcrumb from "@/components/Breadcrumb";
import { CreateSubjectForm } from "./components/Form";

interface CreateSubjectPageProps {}

const CreateSubjectPage: React.FC<CreateSubjectPageProps> = (props) => {
  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create subject" />

      <CreateSubjectForm />
    </div>
  );
};

export default CreateSubjectPage;
