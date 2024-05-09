import { GetCourseRequestHandler } from "@/lib/services/course/Handlers";
import { UpdateCourseForm } from "../components/Form";
import { notFound } from "next/navigation";
import { GetSubjectsRequestHandler } from "@/lib/services/subject/Handlers";

interface UpdateCoursePageProps {
  params: { id: string };
}

const UpdateCoursePage: React.FC<UpdateCoursePageProps> = async (props) => {
  const { id } = props.params;
  const course = (await GetCourseRequestHandler(id)).data;
  const subjects = await GetSubjectsRequestHandler({ pageSize: 999 });

  if (!course) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateCourseForm course={course} payload={subjects.data?.items} />
    </div>
  );
};

export default UpdateCoursePage;
