import Breadcrumb from "@/components/Breadcrumb";
import { CreateUserForm } from "../components/Form";

interface CreateUserPageProps {}

const CreateUserPage: React.FC<CreateUserPageProps> = (props) => {
  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create user" />

      <CreateUserForm />
    </div>
  );
};

export default CreateUserPage;
