import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetGradeLevelRequestHandler } from "@/lib/services/gradeLevel/Handlers";
import { notFound } from "next/navigation";
import { DeleteGradeLevelConfirm } from "@/app/manage/gradeLevel/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const gradeLevel = (await GetGradeLevelRequestHandler(id)).data;

  if (!gradeLevel) return notFound();

  return (
    <DefaultModal title="Delete GradeLevel">
      <div className="w-180">
        <DeleteGradeLevelConfirm gradeLevel={gradeLevel} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
