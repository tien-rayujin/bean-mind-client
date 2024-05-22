import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetActivityRequestHandler } from "@/lib/services/activity/Handlers";
import { notFound } from "next/navigation";
import { DeleteActivityConfirm } from "@/app/manage/activity/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const activity = (await GetActivityRequestHandler(id)).data;

  if (!activity) return notFound();

  return (
    <DefaultModal title="Delete Activity">
      <div className="w-180">
        <DeleteActivityConfirm activity={activity} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
