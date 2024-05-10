import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetCourseRequestHandler } from "@/lib/services/course/Handlers";
import { notFound } from "next/navigation";
import { DeleteCourseConfirm } from "@/app/manage/course/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const course = (await GetCourseRequestHandler(id)).data;

  if (!course) return notFound();

  return (
    <DefaultModal title="Delete Course">
      <div className="w-180">
        <DeleteCourseConfirm course={course} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
