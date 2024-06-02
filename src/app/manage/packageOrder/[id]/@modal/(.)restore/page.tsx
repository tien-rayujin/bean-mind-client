import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetPackageOrderRequestHandler } from "@/lib/services/packageOrder/Handlers";
import { notFound } from "next/navigation";
import { RestorePackageOrderConfirm } from "@/app/manage/packageOrder/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const packageorder = (await GetPackageOrderRequestHandler(id)).data;

  if (!packageorder) return notFound();

  return (
    <DefaultModal title="Restore PackageOrder">
      <div className="w-180">
        <RestorePackageOrderConfirm packageorder={packageorder} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
