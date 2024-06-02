import React from "react";
import { CreateSessionForm } from "@/app/manage/session/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetTeachingSlotsRequestHandler } from "@/lib/services/teachingSlot/Handlers";
import { notFound } from "next/navigation";
import { GetEnrollmentsRequestHandler } from "@/lib/services/enrollment/Handlers";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const payload = await Promise.all([
    GetTeachingSlotsRequestHandler({ pageSize: 20 }),
    GetEnrollmentsRequestHandler({ pageSize: 20 }),
  ]);
  const teachingSlots = payload[0].data?.items;
  const enrollments = payload[1].data?.items;

  if (!teachingSlots || !enrollments) return notFound();

  return (
    <DefaultModal title="Create Session">
      <div className="w-180">
        <CreateSessionForm
          payload={{
            teachingSlots: teachingSlots,
            enrollments: enrollments,
            lecturers: [],
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
