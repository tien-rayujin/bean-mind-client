import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetChapterRequestHandler } from "@/lib/services/chapter/Handlers";
import { notFound } from "next/navigation";
import { DeleteChapterConfirm } from "@/app/manage/chapter/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const chapter = (await GetChapterRequestHandler(id)).data;

  if (!chapter) return notFound();

  return (
    <DefaultModal title="Delete Chapter">
      <div className="w-180">
        <DeleteChapterConfirm chapter={chapter} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
