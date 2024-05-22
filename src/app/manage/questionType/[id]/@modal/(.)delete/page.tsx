import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetQuestionTypeRequestHandler } from "@/lib/services/questionType/Handlers";
import { notFound } from "next/navigation";
import { DeleteQuestionTypeConfirm } from "@/app/manage/questionType/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const questionType = (await GetQuestionTypeRequestHandler(id)).data;

  if (!questionType) return notFound();

  return (
    <DefaultModal title="Delete QuestionType">
      <div className="w-180">
        <DeleteQuestionTypeConfirm questionType={questionType} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
