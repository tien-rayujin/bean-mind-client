import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetQuestionRequestHandler } from "@/lib/services/question/Handlers";
import { UpdateQuestionForm } from "@/app/manage/question/components/Form";
import { notFound } from "next/navigation";
import { GetQuestionTypesRequestHandler } from "@/lib/services/questionType/Handlers";
import { GetQuestionLevelsRequestHandler } from "@/lib/services/questionLevel/Handlers";
import { GetTopicsRequestHandler } from "@/lib/services/topic/Handlers";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const question = (await GetQuestionRequestHandler(id)).data;
  const payload = await Promise.all([
    GetQuestionTypesRequestHandler({ pageSize: 20 }),
    GetQuestionLevelsRequestHandler({ pageSize: 20 }),
    GetTopicsRequestHandler({ pageSize: 20 }),
  ]);
  const questionTypes = payload[0].data?.items;
  const questionLevels = payload[1].data?.items;
  const topics = payload[2].data?.items;

  if (!question || !questionTypes || !questionLevels || !topics)
    return notFound();

  return (
    <DefaultModal title="Update Question">
      <div className="w-180">
        <UpdateQuestionForm
          question={question}
          payload={{
            questionTypes: questionTypes,
            questionLevels: questionLevels,
            topics: topics,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
