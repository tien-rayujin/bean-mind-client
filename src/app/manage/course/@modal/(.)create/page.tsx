import React from "react";
import { CreateCourseForm } from "../../create/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetSubjectsRequestHandler } from "@/lib/services/subject/Handlers";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const subjects = await GetSubjectsRequestHandler({ pageSize: 999 });

  return (
    <DefaultModal title="Create Course">
      <div className="w-180">
        <CreateCourseForm payload={subjects.data?.items} />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
