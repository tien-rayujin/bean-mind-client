import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetActivityRequestHandler } from "@/lib/services/activity/Handlers";
import { notFound } from "next/navigation";
import { RestoreActivityConfirm } from "@/app/manage/activity/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const activity = (await GetActivityRequestHandler(id)).data;

  if (!activity) return notFound();

  return (
    <DefaultModal title="Restore Activity">
      <div className="w-180">
        <RestoreActivityConfirm activity={activity} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
