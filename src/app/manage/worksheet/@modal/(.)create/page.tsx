import React from "react";
import { CreateWorksheetForm } from "@/app/manage/worksheet/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetActivitiesRequestHandler } from "@/lib/services/activity/Handlers";
import { GetWorksheetTemplatesRequestHandler } from "@/lib/services/worksheetTemplate/Handlers";
import { notFound } from "next/navigation";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
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
    <DefaultModal title="Create Worksheet">
      <div className="w-180">
        <CreateWorksheetForm
          payload={{
            activities: activities,
            worksheetTemplates: worksheetTemplates,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
