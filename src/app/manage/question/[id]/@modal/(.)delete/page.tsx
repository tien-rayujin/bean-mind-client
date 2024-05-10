import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetQuestionRequestHandler } from "@/lib/services/question/Handlers";
import { notFound } from "next/navigation";
import { DeleteQuestionConfirm } from "@/app/manage/question/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const question = (await GetQuestionRequestHandler(id)).data;

  if (!question) return notFound();

  return (
    <DefaultModal title="Delete Question">
      <div className="w-180">
        <DeleteQuestionConfirm question={question} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
