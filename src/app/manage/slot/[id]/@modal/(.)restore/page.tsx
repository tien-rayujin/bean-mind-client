import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetSlotRequestHandler } from "@/lib/services/slot/Handlers";
import { notFound } from "next/navigation";
import { RestoreSlotConfirm } from "@/app/manage/slot/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const slot = (await GetSlotRequestHandler(id)).data;

  if (!slot) return notFound();

  return (
    <DefaultModal title="Restore Slot">
      <div className="w-180">
        <RestoreSlotConfirm slot={slot} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
