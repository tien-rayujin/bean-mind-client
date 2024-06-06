import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetUserRequestHandler } from "@/lib/services/user/Handlers";
import { notFound } from "next/navigation";
import { DeleteUserConfirm } from "@/app/manage/user/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const user = (await GetUserRequestHandler(id)).data;

  if (!user) return notFound();

  return (
    <DefaultModal title="Delete User">
      <div className="w-180">
        <DeleteUserConfirm user={user} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
