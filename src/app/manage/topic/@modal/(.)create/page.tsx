import React from "react";
import { CreateTopicForm } from "@/app/manage/topic/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetChaptersRequestHandler } from "@/lib/services/chapter/Handlers";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const chapters = (await GetChaptersRequestHandler({ pageSize: 20 })).data
    ?.items;
  return (
    <DefaultModal title="Create Topic">
      <div className="w-180">
        <CreateTopicForm payload={chapters} />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
