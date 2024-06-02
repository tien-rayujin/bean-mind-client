import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetSessionRequestHandler } from "@/lib/services/session/Handlers";
import { notFound } from "next/navigation";
import { DeleteSessionConfirm } from "@/app/manage/session/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const session = (await GetSessionRequestHandler(id)).data;

  if (!session) return notFound();

  return (
    <DefaultModal title="Delete Session">
      <div className="w-180">
        <DeleteSessionConfirm session={session} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
