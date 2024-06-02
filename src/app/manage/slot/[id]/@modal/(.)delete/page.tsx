import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetSlotRequestHandler } from "@/lib/services/slot/Handlers";
import { notFound } from "next/navigation";
import { DeleteSlotConfirm } from "@/app/manage/slot/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const slot = (await GetSlotRequestHandler(id)).data;

  if (!slot) return notFound();

  return (
    <DefaultModal title="Delete Slot">
      <div className="w-180">
        <DeleteSlotConfirm slot={slot} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
