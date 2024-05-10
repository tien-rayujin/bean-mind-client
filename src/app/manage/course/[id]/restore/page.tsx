import { GetCourseRequestHandler } from "@/lib/services/course/Handlers";
import { RestoreCourseConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreCoursePageProps {
  params: { id: string };
}

const RestoreCoursePage: React.FC<RestoreCoursePageProps> = async (props) => {
  const { id } = props.params;
  const course = (await GetCourseRequestHandler(id)).data;

  if (!course) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreCourseConfirm course={course} />
    </div>
  );
};

export default RestoreCoursePage;
