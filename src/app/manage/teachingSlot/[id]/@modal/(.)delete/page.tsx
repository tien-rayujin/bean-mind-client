import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetTeachingSlotRequestHandler } from "@/lib/services/teachingSlot/Handlers";
import { notFound } from "next/navigation";
import { DeleteTeachingSlotConfirm } from "@/app/manage/teachingSlot/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const teachingSlot = (await GetTeachingSlotRequestHandler(id)).data;

  if (!teachingSlot) return notFound();

  return (
    <DefaultModal title="Delete TeachingSlot">
      <div className="w-180">
        <DeleteTeachingSlotConfirm teachingSlot={teachingSlot} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
