import React from "react";
import { CreateActivityForm } from "@/app/manage/activity/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetTopicsRequestHandler } from "@/lib/services/topic/Handlers";
import { GetActivityTypesRequestHandler } from "@/lib/services/activityType/Handlers";
import { notFound } from "next/navigation";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const payload = await Promise.all([
    GetActivityTypesRequestHandler({ pageSize: 20 }),
    GetTopicsRequestHandler({ pageSize: 20 }),
  ]);
  const activityTypes = payload[0].data?.items;
  const topics = payload[1].data?.items;

  if (!activityTypes || !topics) return notFound();

  return (
    <DefaultModal title="Create Activity">
      <div className="w-180">
        <CreateActivityForm
          payload={{
            activityType: activityTypes,
            topics: topics,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
