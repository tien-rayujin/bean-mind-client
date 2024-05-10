import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetTopicRequestHandler } from "@/lib/services/topic/Handlers";
import { UpdateTopicForm } from "@/app/manage/topic/components/Form";
import { notFound } from "next/navigation";
import { GetChaptersRequestHandler } from "@/lib/services/chapter/Handlers";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const topic = (await GetTopicRequestHandler(id)).data;
  const chapters = (await GetChaptersRequestHandler({ pageSize: 20 })).data
    ?.items;

  if (!topic) return notFound();

  return (
    <DefaultModal title="Update Topic">
      <div className="w-180">
        <UpdateTopicForm topic={topic} payload={chapters} />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
