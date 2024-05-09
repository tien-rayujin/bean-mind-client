import React from "react";
import { DefaultModal } from "@/components/Modal";
import { UpdateSubjectForm } from "@/app/manage/subject/[id]/components/Form";
import { GetSubjectRequestHandler } from "@/lib/services/subject/Handlers";
import { notFound } from "next/navigation";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const subject = (await GetSubjectRequestHandler(id)).data;

  if (!subject) return notFound();

  return (
    <DefaultModal title="Update Subject">
      <div className="w-180">
        <UpdateSubjectForm subject={subject} />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
