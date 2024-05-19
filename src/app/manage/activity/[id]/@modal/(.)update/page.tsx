import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetActivityRequestHandler } from "@/lib/services/activity/Handlers";
import { UpdateActivityForm } from "@/app/manage/activity/components/Form";
import { notFound } from "next/navigation";
import { GetTopicsRequestHandler } from "@/lib/services/topic/Handlers";
import { GetActivityTypesRequestHandler } from "@/lib/services/activityType/Handlers";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const activity = (await GetActivityRequestHandler(id)).data;

  const payload = await Promise.all([
    GetActivityTypesRequestHandler({ pageSize: 20 }),
    GetTopicsRequestHandler({ pageSize: 20 }),
  ]);
  const activityTypes = payload[0].data?.items;
  const topics = payload[1].data?.items;

  if (!activity || !activityTypes || !topics) return notFound();

  return (
    <DefaultModal title="Update Activity">
      <div className="w-180">
        <UpdateActivityForm
          activity={activity}
          payload={{
            activityType: activityTypes,
            topics: topics,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
