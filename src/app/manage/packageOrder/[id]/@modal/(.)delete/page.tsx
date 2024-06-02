import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetPackageOrderRequestHandler } from "@/lib/services/packageOrder/Handlers";
import { notFound } from "next/navigation";
import { DeletePackageOrderConfirm } from "@/app/manage/packageOrder/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const packageorder = (await GetPackageOrderRequestHandler(id)).data;

  if (!packageorder) return notFound();

  return (
    <DefaultModal title="Delete PackageOrder">
      <div className="w-180">
        <DeletePackageOrderConfirm packageorder={packageorder} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
