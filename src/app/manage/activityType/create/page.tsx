import Breadcrumb from "@/components/Breadcrumb";
import { CreateActivityTypeForm } from "../components/Form";

interface CreateActivityTypePageProps {}

const CreateActivityTypePage: React.FC<CreateActivityTypePageProps> = (
  props,
) => {
  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create activityType" />

      <CreateActivityTypeForm />
    </div>
  );
};

export default CreateActivityTypePage;
