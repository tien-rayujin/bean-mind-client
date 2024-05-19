import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetWorksheetTemplateRequestHandler } from "@/lib/services/worksheetTemplate/Handlers";
import { notFound } from "next/navigation";
import { DeleteWorksheetTemplateConfirm } from "@/app/manage/worksheetTemplate/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const worksheetTemplate = (await GetWorksheetTemplateRequestHandler(id)).data;

  if (!worksheetTemplate) return notFound();

  return (
    <DefaultModal title="Delete WorksheetTemplate">
      <div className="w-180">
        <DeleteWorksheetTemplateConfirm worksheetTemplate={worksheetTemplate} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
