import Breadcrumb from "@/components/Breadcrumb";
import { CreateCourseForm } from "./components/Form";
import { GetSubjectsRequestHandler } from "@/lib/services/subject/Handlers";

interface CreateCoursePageProps {}

const CreateCoursePage: React.FC<CreateCoursePageProps> = async (props) => {
  const subjects = await GetSubjectsRequestHandler({ pageSize: 999 });

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create course" />

      <CreateCourseForm payload={subjects.data?.items} />
    </div>
  );
};

export default CreateCoursePage;
