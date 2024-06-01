import React from "react";
import { CreateGradeLevelForm } from "@/app/manage/gradeLevel/components/Form";
import { DefaultModal } from "@/components/Modal";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = (props) => {
  return (
    <DefaultModal title="Create GradeLevel">
      <div className="w-180">
        <CreateGradeLevelForm />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
