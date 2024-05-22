import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetTopicRequestHandler } from "@/lib/services/topic/Handlers";
import { notFound } from "next/navigation";
import { DeleteTopicConfirm } from "@/app/manage/topic/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const topic = (await GetTopicRequestHandler(id)).data;

  if (!topic) return notFound();

  return (
    <DefaultModal title="Delete Topic">
      <div className="w-180">
        <DeleteTopicConfirm topic={topic} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
