import React from "react";
import { CreateQuestionForm } from "@/app/manage/question/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetQuestionTypesRequestHandler } from "@/lib/services/questionType/Handlers";
import { GetQuestionLevelsRequestHandler } from "@/lib/services/questionLevel/Handlers";
import { notFound } from "next/navigation";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const payload = await Promise.all([
    GetQuestionTypesRequestHandler({ pageSize: 20 }),
    GetQuestionLevelsRequestHandler({ pageSize: 20 }),
  ]);
  const questionTypes = payload[0].data?.items;
  const questionLevels = payload[1].data?.items;

  if (!questionTypes || !questionLevels) return notFound();

  return (
    <DefaultModal title="Create Question">
      <div className="w-180">
        <CreateQuestionForm
          payload={{
            questionLevel: questionLevels,
            questionType: questionTypes,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
