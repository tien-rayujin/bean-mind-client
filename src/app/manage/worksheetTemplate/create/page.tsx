import Breadcrumb from "@/components/Breadcrumb";
import { CreateWorksheetTemplateForm } from "../components/Form";
import { GetTopicsRequestHandler } from "@/lib/services/topic/Handlers";
import { GetChaptersRequestHandler } from "@/lib/services/chapter/Handlers";
import { notFound } from "next/navigation";
import { GetSubjectsRequestHandler } from "@/lib/services/subject/Handlers";

interface CreateWorksheetTemplatePageProps {}

const CreateWorksheetTemplatePage: React.FC<
  CreateWorksheetTemplatePageProps
> = async (props) => {
  const payload = await Promise.all([
    GetChaptersRequestHandler({ pageSize: 20 }),
    GetTopicsRequestHandler({ pageSize: 20 }),
    GetSubjectsRequestHandler({ pageSize: 20 }),
  ]);
  const chapters = payload[0].data?.items;
  const topics = payload[1].data?.items;
  const subjects = payload[2].data?.items;

  if (!chapters || !topics || !subjects) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create worksheetTemplate" />

      <CreateWorksheetTemplateForm
        payload={{
          chapter: chapters,
          topics: topics,
          subjects: subjects,
        }}
      />
    </div>
  );
};

export default CreateWorksheetTemplatePage;
