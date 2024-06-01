import React from "react";
import { CreateCourseForm } from "@/app/manage/course/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetSubjectsRequestHandler } from "@/lib/services/subject/Handlers";
import { GetGradeLevelsRequestHandler } from "@/lib/services/gradeLevel/Handlers";
import { notFound } from "next/navigation";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const payload = await Promise.all([
    GetSubjectsRequestHandler({ pageSize: 20 }),
    GetGradeLevelsRequestHandler({ pageSize: 20 }),
  ]);
  const subjects = payload[0].data?.items;
  const gradeLevels = payload[1].data?.items;

  if (!subjects || !gradeLevels) return notFound();

  return (
    <DefaultModal title="Create Course">
      <div className="w-180">
        <CreateCourseForm
          payload={{
            subjects: subjects,
            gradeLevels: gradeLevels,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
