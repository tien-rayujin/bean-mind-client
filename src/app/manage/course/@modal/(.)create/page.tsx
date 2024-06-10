import React from "react";
import { CreateCourseForm } from "@/app/manage/course/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetSubjectsRequestHandler } from "@/lib/services/subject/Handlers";
import { notFound } from "next/navigation";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const payload = await Promise.all([
    GetSubjectsRequestHandler({ pageSize: 20 }),
  ]);
  const subjects = payload[0].data?.items;

  if (!subjects) return notFound();

  return (
    <DefaultModal title="Create Course">
      <div className="w-180">
        <CreateCourseForm
          payload={{
            subjects: subjects,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
