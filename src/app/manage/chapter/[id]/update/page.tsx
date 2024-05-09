import { GetChapterRequestHandler } from "@/lib/services/chapter/Handlers";
import { UpdateChapterForm } from "../components/Form";
import { notFound } from "next/navigation";
import { GetCoursesRequestHandler } from "@/lib/services/course/Handlers";

interface UpdateChapterPageProps {
  params: { id: string };
}

const UpdateChapterPage: React.FC<UpdateChapterPageProps> = async (props) => {
  const { id } = props.params;
  const chapter = (await GetChapterRequestHandler(id)).data;
  const courses = await GetCoursesRequestHandler({ pageSize: 999 });

  if (!chapter) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateChapterForm chapter={chapter} payload={courses.data?.items} />
    </div>
  );
};

export default UpdateChapterPage;
