import Breadcrumb from "@/components/Breadcrumb";
import { CreateWorksheetForm } from "../components/Form";
import { GetWorksheetTemplatesRequestHandler } from "@/lib/services/worksheetTemplate/Handlers";
import { notFound } from "next/navigation";
import { GetQuestionsRequestHandler } from "@/lib/services/question/Handlers";

interface CreateWorksheetPageProps {}

const CreateWorksheetPage: React.FC<CreateWorksheetPageProps> = async (
  props,
) => {
  const payload = await Promise.all([
    GetWorksheetTemplatesRequestHandler({ pageSize: 20 }),
    GetQuestionsRequestHandler({ pageSize: 20 }),
  ]);
  const worksheetTemplates = payload[0].data?.items;
  const questions = payload[1].data?.items;

  if (!worksheetTemplates || !questions) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create worksheet" />

      <CreateWorksheetForm
        payload={{
          worksheetTemplates: worksheetTemplates,
          questions: questions,
        }}
      />
    </div>
  );
};

export default CreateWorksheetPage;
