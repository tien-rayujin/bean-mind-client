import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetSlotRequestHandler } from "@/lib/services/slot/Handlers";
import { UpdateSlotForm } from "@/app/manage/slot/components/Form";
import { notFound } from "next/navigation";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const slot = (await GetSlotRequestHandler(id)).data;

  if (!slot) return notFound();

  return (
    <DefaultModal title="Update Slot">
      <div className="w-180">
        <UpdateSlotForm slot={slot} />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
