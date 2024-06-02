import React from "react";
import { CreatePackageForm } from "@/app/manage/package/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetGradeLevelsRequestHandler } from "@/lib/services/gradeLevel/Handlers";
import { notFound } from "next/navigation";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const payload = await Promise.all([
    GetGradeLevelsRequestHandler({ pageSize: 20 }),
  ]);
  const gradeLevels = payload[0].data?.items;

  if (!gradeLevels || !gradeLevels) return notFound();

  return (
    <DefaultModal title="Create Package">
      <div className="w-180">
        <CreatePackageForm
          payload={{
            gradeLevels: gradeLevels,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
