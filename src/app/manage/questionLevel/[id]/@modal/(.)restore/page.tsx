import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetQuestionLevelRequestHandler } from "@/lib/services/questionLevel/Handlers";
import { notFound } from "next/navigation";
import { RestoreQuestionLevelConfirm } from "@/app/manage/questionLevel/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const questionLevel = (await GetQuestionLevelRequestHandler(id)).data;

  if (!questionLevel) return notFound();

  return (
    <DefaultModal title="Restore QuestionLevel">
      <div className="w-180">
        <RestoreQuestionLevelConfirm questionLevel={questionLevel} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
