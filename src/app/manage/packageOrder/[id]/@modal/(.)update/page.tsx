import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetPackageOrderRequestHandler } from "@/lib/services/packageOrder/Handlers";
import { UpdatePackageOrderForm } from "@/app/manage/packageOrder/components/Form";
import { notFound } from "next/navigation";
import { GetPackagesRequestHandler } from "@/lib/services/package/Handlers";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const packageorder = (await GetPackageOrderRequestHandler(id)).data;
  const payload = await Promise.all([
    GetPackagesRequestHandler({ pageSize: 20 }),
  ]);
  const packages = payload[0].data?.items;

  if (!packageorder || !packages) return notFound();

  return (
    <DefaultModal title="Update PackageOrder">
      <div className="w-180">
        <UpdatePackageOrderForm
          packageorder={packageorder}
          payload={{
            packages: packages,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
