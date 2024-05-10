import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetActivityTypeRequestHandler } from "@/lib/services/activityType/Handlers";
import { notFound } from "next/navigation";
import { RestoreActivityTypeConfirm } from "@/app/manage/activityType/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const activityType = (await GetActivityTypeRequestHandler(id)).data;

  if (!activityType) return notFound();

  return (
    <DefaultModal title="Restore ActivityType">
      <div className="w-180">
        <RestoreActivityTypeConfirm activityType={activityType} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
