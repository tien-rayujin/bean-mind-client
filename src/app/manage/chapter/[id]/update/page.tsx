import { GetChapterRequestHandler } from "@/lib/services/chapter/Handlers";
import { UpdateChapterForm } from "@/app/manage/chapter/components/Form";
import { notFound } from "next/navigation";
import { GetCoursesRequestHandler } from "@/lib/services/course/Handlers";

interface UpdateChapterPageProps {
  params: { id: string };
}

const UpdateChapterPage: React.FC<UpdateChapterPageProps> = async (props) => {
  const { id } = props.params;
  const chapter = (await GetChapterRequestHandler(id)).data;
  const courses = (await GetCoursesRequestHandler({ pageSize: 20 })).data
    ?.items;

  if (!chapter) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateChapterForm chapter={chapter} payload={courses} />
    </div>
  );
};

export default UpdateChapterPage;
