import { GetWorksheetTemplateRequestHandler } from "@/lib/services/worksheetTemplate/Handlers";
import { DeleteWorksheetTemplateConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteWorksheetTemplatePageProps {
  params: { id: string };
}

const DeleteWorksheetTemplatePage: React.FC<
  DeleteWorksheetTemplatePageProps
> = async (props) => {
  const { id } = props.params;
  const worksheetTemplate = (await GetWorksheetTemplateRequestHandler(id)).data;

  if (!worksheetTemplate) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteWorksheetTemplateConfirm worksheetTemplate={worksheetTemplate} />
    </div>
  );
};

export default DeleteWorksheetTemplatePage;
