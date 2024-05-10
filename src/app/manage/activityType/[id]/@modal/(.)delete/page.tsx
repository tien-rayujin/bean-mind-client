import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetActivityTypeRequestHandler } from "@/lib/services/activityType/Handlers";
import { notFound } from "next/navigation";
import { DeleteActivityTypeConfirm } from "@/app/manage/activityType/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const activityType = (await GetActivityTypeRequestHandler(id)).data;

  if (!activityType) return notFound();

  return (
    <DefaultModal title="Delete ActivityType">
      <div className="w-180">
        <DeleteActivityTypeConfirm activityType={activityType} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
