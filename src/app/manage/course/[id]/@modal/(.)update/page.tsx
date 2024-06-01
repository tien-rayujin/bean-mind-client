import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetCourseRequestHandler } from "@/lib/services/course/Handlers";
import { UpdateCourseForm } from "@/app/manage/course/components/Form";
import { notFound } from "next/navigation";
import { GetSubjectsRequestHandler } from "@/lib/services/subject/Handlers";
import { GetGradeLevelsRequestHandler } from "@/lib/services/gradeLevel/Handlers";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const course = (await GetCourseRequestHandler(id)).data;
  const payload = await Promise.all([
    GetSubjectsRequestHandler({ pageSize: 20 }),
    GetGradeLevelsRequestHandler({ pageSize: 20 }),
  ]);
  const subjects = payload[0].data?.items;
  const gradeLevels = payload[1].data?.items;

  if (!subjects || !gradeLevels) return notFound();

  if (!course || !subjects || !gradeLevels) return notFound();

  return (
    <DefaultModal title="Update Course">
      <div className="w-180">
        <UpdateCourseForm
          course={course}
          payload={{
            subjects: subjects,
            gradeLevels: gradeLevels,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
