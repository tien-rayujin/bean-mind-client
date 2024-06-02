import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetPackageRequestHandler } from "@/lib/services/package/Handlers";
import { notFound } from "next/navigation";
import { RestorePackageConfirm } from "@/app/manage/package/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const _package = (await GetPackageRequestHandler(id)).data;

  if (!_package) return notFound();

  return (
    <DefaultModal title="Restore Package">
      <div className="w-180">
        <RestorePackageConfirm package={_package} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
