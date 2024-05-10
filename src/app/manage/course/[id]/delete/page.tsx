import { GetCourseRequestHandler } from "@/lib/services/course/Handlers";
import { DeleteCourseConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteCoursePageProps {
  params: { id: string };
}

const DeleteCoursePage: React.FC<DeleteCoursePageProps> = async (props) => {
  const { id } = props.params;
  const course = (await GetCourseRequestHandler(id)).data;

  if (!course) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteCourseConfirm course={course} />
    </div>
  );
};

export default DeleteCoursePage;
