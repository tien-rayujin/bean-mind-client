import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetSubjectRequestHandler } from "@/lib/services/subject/Handlers";
import { notFound } from "next/navigation";
import { DeleteSubjectConfirm } from "@/app/manage/subject/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const subject = (await GetSubjectRequestHandler(id)).data;

  if (!subject) return notFound();

  return (
    <DefaultModal title="Delete Subject">
      <div className="w-180">
        <DeleteSubjectConfirm subject={subject} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
