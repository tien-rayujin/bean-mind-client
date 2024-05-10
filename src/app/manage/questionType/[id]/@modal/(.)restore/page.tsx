import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetQuestionTypeRequestHandler } from "@/lib/services/questionType/Handlers";
import { notFound } from "next/navigation";
import { RestoreQuestionTypeConfirm } from "@/app/manage/questionType/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const questionType = (await GetQuestionTypeRequestHandler(id)).data;

  if (!questionType) return notFound();

  return (
    <DefaultModal title="Restore QuestionType">
      <div className="w-180">
        <RestoreQuestionTypeConfirm questionType={questionType} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
