import React from "react";
import { CreateChapterForm } from "@/app/manage/chapter/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetCoursesRequestHandler } from "@/lib/services/course/Handlers";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const courses = (await GetCoursesRequestHandler({ pageSize: 20 })).data
    ?.items;
  return (
    <DefaultModal title="Create Chapter">
      <div className="w-180">
        <CreateChapterForm payload={courses} />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
