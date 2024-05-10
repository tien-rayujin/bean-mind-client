import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetQuestionRequestHandler } from "@/lib/services/question/Handlers";
import { UpdateQuestionForm } from "@/app/manage/question/components/Form";
import { notFound } from "next/navigation";
import { GetQuestionTypesRequestHandler } from "@/lib/services/questionType/Handlers";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const question = (await GetQuestionRequestHandler(id)).data;
  const questionTypes = (await GetQuestionTypesRequestHandler({ pageSize: 20 }))
    .data?.items;

  if (!question) return notFound();

  return (
    <DefaultModal title="Update Question">
      <div className="w-180">
        <UpdateQuestionForm question={question} payload={questionTypes} />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
