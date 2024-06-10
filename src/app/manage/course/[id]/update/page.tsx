import { GetCourseRequestHandler } from "@/lib/services/course/Handlers";
import { UpdateCourseForm } from "@/app/manage/course/components/Form";
import { notFound } from "next/navigation";
import { GetSubjectsRequestHandler } from "@/lib/services/subject/Handlers";

interface UpdateCoursePageProps {
  params: { id: string };
}

const UpdateCoursePage: React.FC<UpdateCoursePageProps> = async (props) => {
  const { id } = props.params;
  const course = (await GetCourseRequestHandler(id)).data;
  const payload = await Promise.all([
    GetSubjectsRequestHandler({ pageSize: 20 }),
  ]);
  const subjects = payload[0].data?.items;

  if (!course || !subjects) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateCourseForm
        course={course}
        payload={{
          subjects: subjects,
        }}
      />
    </div>
  );
};

export default UpdateCoursePage;
