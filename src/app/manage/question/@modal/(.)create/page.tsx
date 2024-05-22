import React from "react";
import { CreateQuestionForm } from "@/app/manage/question/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetQuestionTypesRequestHandler } from "@/lib/services/questionType/Handlers";
import { GetQuestionLevelsRequestHandler } from "@/lib/services/questionLevel/Handlers";
import { notFound } from "next/navigation";
import { GetTopicsRequestHandler } from "@/lib/services/topic/Handlers";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const payload = await Promise.all([
    GetQuestionTypesRequestHandler({ pageSize: 20 }),
    GetQuestionLevelsRequestHandler({ pageSize: 20 }),
    GetTopicsRequestHandler({ pageSize: 20 }),
  ]);
  const questionTypes = payload[0].data?.items;
  const questionLevels = payload[1].data?.items;
  const topics = payload[2].data?.items;

  if (!questionTypes || !questionLevels || !topics) return notFound();

  return (
    <DefaultModal title="Create Question">
      <div className="w-180">
        <CreateQuestionForm
          payload={{
            questionLevels: questionLevels,
            questionTypes: questionTypes,
            topics: topics,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
