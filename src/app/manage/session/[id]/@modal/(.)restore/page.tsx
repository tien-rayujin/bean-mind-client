import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetSessionRequestHandler } from "@/lib/services/session/Handlers";
import { notFound } from "next/navigation";
import { RestoreSessionConfirm } from "@/app/manage/session/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const session = (await GetSessionRequestHandler(id)).data;

  if (!session) return notFound();

  return (
    <DefaultModal title="Restore Session">
      <div className="w-180">
        <RestoreSessionConfirm session={session} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
