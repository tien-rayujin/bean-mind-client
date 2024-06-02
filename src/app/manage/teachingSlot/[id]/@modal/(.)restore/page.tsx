import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetTeachingSlotRequestHandler } from "@/lib/services/teachingSlot/Handlers";
import { notFound } from "next/navigation";
import { RestoreTeachingSlotConfirm } from "@/app/manage/teachingSlot/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const teachingSlot = (await GetTeachingSlotRequestHandler(id)).data;

  if (!teachingSlot) return notFound();

  return (
    <DefaultModal title="Restore TeachingSlot">
      <div className="w-180">
        <RestoreTeachingSlotConfirm teachingSlot={teachingSlot} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
