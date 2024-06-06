import React from "react";
import { CreateUserForm } from "@/app/manage/user/components/Form";
import { DefaultModal } from "@/components/Modal";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = (props) => {
  return (
    <DefaultModal title="Create User">
      <div className="w-180">
        <CreateUserForm />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
