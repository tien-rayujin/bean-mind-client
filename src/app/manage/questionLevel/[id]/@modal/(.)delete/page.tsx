import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetQuestionLevelRequestHandler } from "@/lib/services/questionLevel/Handlers";
import { notFound } from "next/navigation";
import { DeleteQuestionLevelConfirm } from "@/app/manage/questionLevel/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const questionLevel = (await GetQuestionLevelRequestHandler(id)).data;

  if (!questionLevel) return notFound();

  return (
    <DefaultModal title="Delete QuestionLevel">
      <div className="w-180">
        <DeleteQuestionLevelConfirm questionLevel={questionLevel} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
