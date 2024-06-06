import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetUserRequestHandler } from "@/lib/services/user/Handlers";
import { UpdateUserForm } from "@/app/manage/user/components/Form";
import { notFound } from "next/navigation";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const user = (await GetUserRequestHandler(id)).data;

  if (!user) return notFound();

  return (
    <DefaultModal title="Update User">
      <div className="w-180">
        <UpdateUserForm user={user} />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
