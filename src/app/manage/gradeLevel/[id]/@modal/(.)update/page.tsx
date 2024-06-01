import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetGradeLevelRequestHandler } from "@/lib/services/gradeLevel/Handlers";
import { UpdateGradeLevelForm } from "@/app/manage/gradeLevel/components/Form";
import { notFound } from "next/navigation";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const gradelevel = (await GetGradeLevelRequestHandler(id)).data;

  if (!gradelevel) return notFound();

  return (
    <DefaultModal title="Update GradeLevel">
      <div className="w-180">
        <UpdateGradeLevelForm gradelevel={gradelevel} />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
