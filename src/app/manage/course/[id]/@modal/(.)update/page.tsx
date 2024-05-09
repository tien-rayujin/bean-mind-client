import React from "react";
import { DefaultModal } from "@/components/Modal";
import { UpdateCourseForm } from "@/app/manage/course/[id]/components/Form";
import { GetCourseRequestHandler } from "@/lib/services/course/Handlers";
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
  const subjects = await GetSubjectsRequestHandler({ pageSize: 999 });

  if (!course) return notFound();

  return (
    <DefaultModal title="Update Course">
      <div className="w-180">
        <UpdateCourseForm course={course} payload={subjects.data?.items} />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
