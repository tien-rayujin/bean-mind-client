import React from "react";
import { CreateCourseForm } from "@/app/manage/course/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetSubjectsRequestHandler } from "@/lib/services/subject/Handlers";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const subjects = (await GetSubjectsRequestHandler({ pageSize: 20 })).data
    ?.items;
  return (
    <DefaultModal title="Create Course">
      <div className="w-180">
        <CreateCourseForm payload={subjects} />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
