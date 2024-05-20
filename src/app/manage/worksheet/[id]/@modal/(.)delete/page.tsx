import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetWorksheetRequestHandler } from "@/lib/services/worksheet/Handlers";
import { notFound } from "next/navigation";
import { DeleteWorksheetConfirm } from "@/app/manage/worksheet/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const worksheet = (await GetWorksheetRequestHandler(id)).data;

  if (!worksheet) return notFound();

  return (
    <DefaultModal title="Delete Worksheet">
      <div className="w-180">
        <DeleteWorksheetConfirm worksheet={worksheet} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
