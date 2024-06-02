import React from "react";
import { CreateSlotForm } from "@/app/manage/slot/components/Form";
import { DefaultModal } from "@/components/Modal";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = (props) => {
  return (
    <DefaultModal title="Create Slot">
      <div className="w-180">
        <CreateSlotForm />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
