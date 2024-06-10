import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetCourseRequestHandler } from "@/lib/services/course/Handlers";
import { UpdateCourseForm } from "@/app/manage/course/components/Form";
import { notFound } from "next/navigation";
import { GetSubjectsRequestHandler } from "@/lib/services/subject/Handlers";

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
  ]);
  const subjects = payload[0].data?.items;

  if (!course || !subjects) return notFound();

  return (
    <DefaultModal title="Update Course">
      <div className="w-180">
        <UpdateCourseForm
          course={course}
          payload={{
            subjects: subjects,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
