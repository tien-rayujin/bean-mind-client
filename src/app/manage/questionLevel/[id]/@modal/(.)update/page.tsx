import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetQuestionLevelRequestHandler } from "@/lib/services/questionLevel/Handlers";
import { UpdateQuestionLevelForm } from "@/app/manage/questionLevel/components/Form";
import { notFound } from "next/navigation";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const questionLevel = (await GetQuestionLevelRequestHandler(id)).data;

  if (!questionLevel) return notFound();

  return (
    <DefaultModal title="Update QuestionLevel">
      <div className="w-180">
        <UpdateQuestionLevelForm questionLevel={questionLevel} />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
