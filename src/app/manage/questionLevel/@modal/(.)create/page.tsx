import React from "react";
import { CreateQuestionLevelForm } from "@/app/manage/questionLevel/components/Form";
import { DefaultModal } from "@/components/Modal";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = (props) => {
  return (
    <DefaultModal title="Create QuestionLevel">
      <div className="w-180">
        <CreateQuestionLevelForm />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
