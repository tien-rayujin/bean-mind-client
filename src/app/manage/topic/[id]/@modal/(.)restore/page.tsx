import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetTopicRequestHandler } from "@/lib/services/topic/Handlers";
import { notFound } from "next/navigation";
import { RestoreTopicConfirm } from "@/app/manage/topic/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const topic = (await GetTopicRequestHandler(id)).data;

  if (!topic) return notFound();

  return (
    <DefaultModal title="Restore Topic">
      <div className="w-180">
        <RestoreTopicConfirm topic={topic} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
