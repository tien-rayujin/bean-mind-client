import { Alert } from "@/components/Alert";
import { GetCourseRequestHandler } from "@/lib/services/course/Handlers";
import { notFound } from "next/navigation";
import { RestoreButton } from "../components/Button";

interface RestoreCoursePageProps {
  params: { id: string };
}

const RestoreCoursePage: React.FC<RestoreCoursePageProps> = async (props) => {
  const { id } = props.params;
  const course = (await GetCourseRequestHandler(id)).data;

  if (!course) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Alert
        status={"warning"}
        title={`Confirm restore for item \"${course.title}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <RestoreButton id={id} />
    </div>
  );
};

export default RestoreCoursePage;
