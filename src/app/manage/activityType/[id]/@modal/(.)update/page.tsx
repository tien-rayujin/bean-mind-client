import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetActivityTypeRequestHandler } from "@/lib/services/activityType/Handlers";
import { UpdateActivityTypeForm } from "@/app/manage/activityType/components/Form";
import { notFound } from "next/navigation";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const activityType = (await GetActivityTypeRequestHandler(id)).data;

  if (!activityType) return notFound();

  return (
    <DefaultModal title="Update ActivityType">
      <div className="w-180">
        <UpdateActivityTypeForm activityType={activityType} />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
