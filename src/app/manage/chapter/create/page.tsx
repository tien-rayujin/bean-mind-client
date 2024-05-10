import Breadcrumb from "@/components/Breadcrumb";
import { CreateChapterForm } from "../components/Form";
import { GetCoursesRequestHandler } from "@/lib/services/course/Handlers";

interface CreateChapterPageProps {}

const CreateChapterPage: React.FC<CreateChapterPageProps> = async (props) => {
  const courses = (await GetCoursesRequestHandler({ pageSize: 20 })).data
    ?.items;
  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create chapter" />

      <CreateChapterForm payload={courses} />
    </div>
  );
};

export default CreateChapterPage;
