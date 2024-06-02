import React from "react";
import { CreateTeachingSlotForm } from "@/app/manage/teachingSlot/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetSlotsRequestHandler } from "@/lib/services/slot/Handlers";
import { notFound } from "next/navigation";
import { GetGradeLevelsRequestHandler } from "@/lib/services/gradeLevel/Handlers";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const payload = await Promise.all([
    GetSlotsRequestHandler({ pageSize: 20 }),
    GetGradeLevelsRequestHandler({ pageSize: 20 }),
  ]);
  const slots = payload[0].data?.items;
  const gradeLevels = payload[1].data?.items;

  if (!slots || !gradeLevels) return notFound();

  return (
    <DefaultModal title="Create TeachingSlot">
      <div className="w-180">
        <CreateTeachingSlotForm
          payload={{
            slots: slots,
            gradeLevels: gradeLevels,
            lecturers: [],
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
