import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetPackageRequestHandler } from "@/lib/services/package/Handlers";
import { notFound } from "next/navigation";
import { DeletePackageConfirm } from "@/app/manage/package/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const _package = (await GetPackageRequestHandler(id)).data;

  if (!_package) return notFound();

  return (
    <DefaultModal title="Delete Package">
      <div className="w-180">
        <DeletePackageConfirm package={_package} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
