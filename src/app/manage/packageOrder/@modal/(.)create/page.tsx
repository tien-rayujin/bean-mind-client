import React from "react";
import { CreatePackageOrderForm } from "@/app/manage/packageOrder/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetPackagesRequestHandler } from "@/lib/services/package/Handlers";
import { notFound } from "next/navigation";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const payload = await Promise.all([
    GetPackagesRequestHandler({ pageSize: 20 }),
  ]);
  const packages = payload[0].data?.items;

  if (!packages) return notFound();

  return (
    <DefaultModal title="Create PackageOrder">
      <div className="w-180">
        <CreatePackageOrderForm
          payload={{
            packages: packages,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
