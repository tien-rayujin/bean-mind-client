import Breadcrumb from "@/components/Breadcrumb";
import { CreateWorksheetForm } from "../components/Form";
import { GetActivitiesRequestHandler } from "@/lib/services/activity/Handlers";
import { GetWorksheetTemplatesRequestHandler } from "@/lib/services/worksheetTemplate/Handlers";
import { notFound } from "next/navigation";

interface CreateWorksheetPageProps {}

const CreateWorksheetPage: React.FC<CreateWorksheetPageProps> = async (
  props,
) => {
  const payload = await Promise.all([
    GetActivitiesRequestHandler({ pageSize: 20 }),
    GetWorksheetTemplatesRequestHandler({ pageSize: 20 }),
  ]);
  const activities = payload[0].data?.items;
  const worksheetTemplates = payload[1].data?.items;

  if (!activities || !worksheetTemplates) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create worksheet" />

      <CreateWorksheetForm
        payload={{
          activities: activities,
          worksheetTemplates: worksheetTemplates,
        }}
      />
    </div>
  );
};

export default CreateWorksheetPage;
