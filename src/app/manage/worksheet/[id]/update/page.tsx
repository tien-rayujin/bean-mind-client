import { GetWorksheetRequestHandler } from "@/lib/services/worksheet/Handlers";
import { UpdateWorksheetForm } from "@/app/manage/worksheet/components/Form";
import { notFound } from "next/navigation";
import { GetActivitiesRequestHandler } from "@/lib/services/activity/Handlers";
import { GetWorksheetTemplatesRequestHandler } from "@/lib/services/worksheetTemplate/Handlers";

interface UpdateWorksheetPageProps {
  params: { id: string };
}

const UpdateWorksheetPage: React.FC<UpdateWorksheetPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const worksheet = (await GetWorksheetRequestHandler(id)).data;
  const payload = await Promise.all([
    GetActivitiesRequestHandler({ pageSize: 20 }),
    GetWorksheetTemplatesRequestHandler({ pageSize: 20 }),
  ]);
  const activities = payload[0].data?.items;
  const worksheetTemplates = payload[1].data?.items;

  if (!worksheet || !activities || !worksheetTemplates) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateWorksheetForm
        worksheet={worksheet}
        payload={{
          activities: activities,
          worksheetTemplates: worksheetTemplates,
        }}
      />
    </div>
  );
};

export default UpdateWorksheetPage;
