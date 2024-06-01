import { GetCourseRequestHandler } from "@/lib/services/course/Handlers";
import { UpdateCourseForm } from "@/app/manage/course/components/Form";
import { notFound } from "next/navigation";
import { GetSubjectsRequestHandler } from "@/lib/services/subject/Handlers";
import { GetGradeLevelsRequestHandler } from "@/lib/services/gradeLevel/Handlers";

interface UpdateCoursePageProps {
  params: { id: string };
}

const UpdateCoursePage: React.FC<UpdateCoursePageProps> = async (props) => {
  const { id } = props.params;
  const course = (await GetCourseRequestHandler(id)).data;
  const payload = await Promise.all([
    GetSubjectsRequestHandler({ pageSize: 20 }),
    GetGradeLevelsRequestHandler({ pageSize: 20 }),
  ]);
  const subjects = payload[0].data?.items;
  const gradeLevels = payload[1].data?.items;

  if (!subjects || !gradeLevels) return notFound();

  if (!course || !subjects || !gradeLevels) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateCourseForm
        course={course}
        payload={{
          subjects: subjects,
          gradeLevels: gradeLevels,
        }}
      />
    </div>
  );
};

export default UpdateCoursePage;
