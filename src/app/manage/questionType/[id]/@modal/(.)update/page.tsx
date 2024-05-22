import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetQuestionTypeRequestHandler } from "@/lib/services/questionType/Handlers";
import { UpdateQuestionTypeForm } from "@/app/manage/questionType/components/Form";
import { notFound } from "next/navigation";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const questionType = (await GetQuestionTypeRequestHandler(id)).data;

  if (!questionType) return notFound();

  return (
    <DefaultModal title="Update QuestionType">
      <div className="w-180">
        <UpdateQuestionTypeForm questionType={questionType} />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
