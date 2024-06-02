import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetGradeLevelRequestHandler } from "@/lib/services/gradeLevel/Handlers";
import { notFound } from "next/navigation";
import { RestoreGradeLevelConfirm } from "@/app/manage/gradeLevel/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const gradeLevel = (await GetGradeLevelRequestHandler(id)).data;

  if (!gradeLevel) return notFound();

  return (
    <DefaultModal title="Restore GradeLevel">
      <div className="w-180">
        <RestoreGradeLevelConfirm gradeLevel={gradeLevel} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
