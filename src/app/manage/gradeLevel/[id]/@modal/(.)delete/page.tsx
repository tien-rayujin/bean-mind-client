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
  const gradelevel = (await GetGradeLevelRequestHandler(id)).data;

  if (!gradelevel) return notFound();

  return (
    <DefaultModal title="Delete GradeLevel">
      <div className="w-180">
        <DeleteGradeLevelConfirm gradelevel={gradelevel} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
