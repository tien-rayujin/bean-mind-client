import { Alert } from "@/components/Alert";
import { GetCourseRequestHandler } from "@/lib/services/course/Handlers";
import { notFound } from "next/navigation";
import { DeleteButton } from "../components/Button";

interface DeleteCoursePageProps {
  params: { id: string };
}

const DeleteCoursePage: React.FC<DeleteCoursePageProps> = async (props) => {
  const { id } = props.params;
  const course = (await GetCourseRequestHandler(id)).data;

  if (!course) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Alert
        status={"danger"}
        title={`Confirm delete for item \"${course.title}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <DeleteButton id={id} />
    </div>
  );
};

export default DeleteCoursePage;
