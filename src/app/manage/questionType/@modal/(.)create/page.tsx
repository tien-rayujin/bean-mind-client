import React from "react";
import { CreateQuestionTypeForm } from "@/app/manage/questionType/components/Form";
import { DefaultModal } from "@/components/Modal";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = (props) => {
  return (
    <DefaultModal title="Create QuestionType">
      <div className="w-180">
        <CreateQuestionTypeForm />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
