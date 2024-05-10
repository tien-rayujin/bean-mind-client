import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetSubjectRequestHandler } from "@/lib/services/subject/Handlers";
import { notFound } from "next/navigation";
import { RestoreSubjectConfirm } from "@/app/manage/subject/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const subject = (await GetSubjectRequestHandler(id)).data;

  if (!subject) return notFound();

  return (
    <DefaultModal title="Restore Subject">
      <div className="w-180">
        <RestoreSubjectConfirm subject={subject} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
