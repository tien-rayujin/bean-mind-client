import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetWorksheetRequestHandler } from "@/lib/services/worksheet/Handlers";
import { UpdateWorksheetForm } from "@/app/manage/worksheet/components/Form";
import { notFound } from "next/navigation";
import { GetActivitiesRequestHandler } from "@/lib/services/activity/Handlers";
import { GetWorksheetTemplatesRequestHandler } from "@/lib/services/worksheetTemplate/Handlers";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
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
    <DefaultModal title="Update Worksheet">
      <div className="w-180">
        <UpdateWorksheetForm
          worksheet={worksheet}
          payload={{
            activities: activities,
            worksheetTemplates: worksheetTemplates,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
