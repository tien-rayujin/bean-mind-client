import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetWorksheetRequestHandler } from "@/lib/services/worksheet/Handlers";
import { notFound } from "next/navigation";
import { RestoreWorksheetConfirm } from "@/app/manage/worksheet/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const worksheet = (await GetWorksheetRequestHandler(id)).data;

  if (!worksheet) return notFound();

  return (
    <DefaultModal title="Restore Worksheet">
      <div className="w-180">
        <RestoreWorksheetConfirm worksheet={worksheet} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
