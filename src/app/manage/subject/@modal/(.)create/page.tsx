import React from "react";
import { CreateSubjectForm } from "@/app/manage/subject/components/Form";
import { DefaultModal } from "@/components/Modal";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = (props) => {
  return (
    <DefaultModal title="Create Subject">
      <div className="w-180">
        <CreateSubjectForm />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
