import Breadcrumb from "@/components/Breadcrumb";
import { CreateCourseForm } from "../components/Form";
import { GetSubjectsRequestHandler } from "@/lib/services/subject/Handlers";
import { notFound } from "next/navigation";

interface CreateCoursePageProps {}

const CreateCoursePage: React.FC<CreateCoursePageProps> = async (props) => {
  const payload = await Promise.all([
    GetSubjectsRequestHandler({ pageSize: 20 }),
  ]);
  const subjects = payload[0].data?.items;

  if (!subjects) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create course" />

      <CreateCourseForm
        payload={{
          subjects: subjects,
        }}
      />
    </div>
  );
};

export default CreateCoursePage;
