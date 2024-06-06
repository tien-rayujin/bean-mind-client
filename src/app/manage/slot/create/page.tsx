import Breadcrumb from "@/components/Breadcrumb";
import { CreateSlotForm } from "../components/Form";

interface CreateSlotPageProps {}

const CreateSlotPage: React.FC<CreateSlotPageProps> = (props) => {
  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create slot" />

      <CreateSlotForm />
    </div>
  );
};

export default CreateSlotPage;
