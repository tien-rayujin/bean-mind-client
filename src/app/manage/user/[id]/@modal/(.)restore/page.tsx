import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetUserRequestHandler } from "@/lib/services/user/Handlers";
import { notFound } from "next/navigation";
import { RestoreUserConfirm } from "@/app/manage/user/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const user = (await GetUserRequestHandler(id)).data;

  if (!user) return notFound();

  return (
    <DefaultModal title="Restore User">
      <div className="w-180">
        <RestoreUserConfirm user={user} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
