import React from "react";
import { CreateActivityTypeForm } from "@/app/manage/activityType/components/Form";
import { DefaultModal } from "@/components/Modal";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = (props) => {
  return (
    <DefaultModal title="Create ActivityType">
      <div className="w-180">
        <CreateActivityTypeForm />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
