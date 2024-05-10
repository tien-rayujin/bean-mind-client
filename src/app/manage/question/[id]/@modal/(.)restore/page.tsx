import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetQuestionRequestHandler } from "@/lib/services/question/Handlers";
import { notFound } from "next/navigation";
import { RestoreQuestionConfirm } from "@/app/manage/question/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const question = (await GetQuestionRequestHandler(id)).data;

  if (!question) return notFound();

  return (
    <DefaultModal title="Restore Question">
      <div className="w-180">
        <RestoreQuestionConfirm question={question} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
