import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetPackageRequestHandler } from "@/lib/services/package/Handlers";
import { UpdatePackageForm } from "@/app/manage/package/components/Form";
import { notFound } from "next/navigation";
import { GetGradeLevelsRequestHandler } from "@/lib/services/gradeLevel/Handlers";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const _package = (await GetPackageRequestHandler(id)).data;
  const payload = await Promise.all([
    GetGradeLevelsRequestHandler({ pageSize: 20 }),
    GetGradeLevelsRequestHandler({ pageSize: 20 }),
  ]);
  const gradeLevels = payload[0].data?.items;

  if (!gradeLevels || !gradeLevels) return notFound();

  if (!_package || !gradeLevels || !gradeLevels) return notFound();

  return (
    <DefaultModal title="Update Package">
      <div className="w-180">
        <UpdatePackageForm
          package={_package}
          payload={{
            gradeLevels: gradeLevels,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
