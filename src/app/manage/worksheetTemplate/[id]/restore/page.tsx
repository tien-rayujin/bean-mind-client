import { GetWorksheetTemplateRequestHandler } from "@/lib/services/worksheetTemplate/Handlers";
import { RestoreWorksheetTemplateConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreWorksheetTemplatePageProps {
  params: { id: string };
}

const RestoreWorksheetTemplatePage: React.FC<
  RestoreWorksheetTemplatePageProps
> = async (props) => {
  const { id } = props.params;
  const worksheetTemplate = (await GetWorksheetTemplateRequestHandler(id)).data;

  if (!worksheetTemplate) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreWorksheetTemplateConfirm worksheetTemplate={worksheetTemplate} />
    </div>
  );
};

export default RestoreWorksheetTemplatePage;
