import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetWorksheetTemplateRequestHandler } from "@/lib/services/worksheetTemplate/Handlers";
import { notFound } from "next/navigation";
import { RestoreWorksheetTemplateConfirm } from "@/app/manage/worksheetTemplate/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const worksheetTemplate = (await GetWorksheetTemplateRequestHandler(id)).data;

  if (!worksheetTemplate) return notFound();

  return (
    <DefaultModal title="Restore WorksheetTemplate">
      <div className="w-180">
        <RestoreWorksheetTemplateConfirm
          worksheetTemplate={worksheetTemplate}
        />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
