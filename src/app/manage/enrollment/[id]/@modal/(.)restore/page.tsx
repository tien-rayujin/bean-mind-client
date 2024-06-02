import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetEnrollmentRequestHandler } from "@/lib/services/enrollment/Handlers";
import { notFound } from "next/navigation";
import { RestoreEnrollmentConfirm } from "@/app/manage/enrollment/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const enrollment = (await GetEnrollmentRequestHandler(id)).data;

  if (!enrollment) return notFound();

  return (
    <DefaultModal title="Restore Enrollment">
      <div className="w-180">
        <RestoreEnrollmentConfirm enrollment={enrollment} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
