import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetSessionRequestHandler } from "@/lib/services/session/Handlers";
import { UpdateSessionForm } from "@/app/manage/session/components/Form";
import { notFound } from "next/navigation";
import { GetTeachingSlotsRequestHandler } from "@/lib/services/teachingSlot/Handlers";
import { GetEnrollmentsRequestHandler } from "@/lib/services/enrollment/Handlers";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const session = (await GetSessionRequestHandler(id)).data;
  const payload = await Promise.all([
    GetTeachingSlotsRequestHandler({ pageSize: 20 }),
    GetEnrollmentsRequestHandler({ pageSize: 20 }),
  ]);
  const teachingSlots = payload[0].data?.items;
  const enrollments = payload[1].data?.items;

  if (!session || !teachingSlots || !enrollments) return notFound();

  return (
    <DefaultModal title="Update Session">
      <div className="w-180">
        <UpdateSessionForm
          session={session}
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

export default UpdateInterceptRoute;
