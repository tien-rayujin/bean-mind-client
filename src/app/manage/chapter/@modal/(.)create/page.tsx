import React from "react";
import { CreateChapterForm } from "../../create/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetCoursesRequestHandler } from "@/lib/services/course/Handlers";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const courses = await GetCoursesRequestHandler({ pageSize: 999 });

  return (
    <DefaultModal title="Create Chapter">
      <div className="w-180">
        <CreateChapterForm payload={courses.data?.items} />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
