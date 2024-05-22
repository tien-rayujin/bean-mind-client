import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetChapterRequestHandler } from "@/lib/services/chapter/Handlers";
import { notFound } from "next/navigation";
import { RestoreChapterConfirm } from "@/app/manage/chapter/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const chapter = (await GetChapterRequestHandler(id)).data;

  if (!chapter) return notFound();

  return (
    <DefaultModal title="Restore Chapter">
      <div className="w-180">
        <RestoreChapterConfirm chapter={chapter} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
