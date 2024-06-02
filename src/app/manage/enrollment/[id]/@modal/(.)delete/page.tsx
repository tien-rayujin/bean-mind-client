import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetEnrollmentRequestHandler } from "@/lib/services/enrollment/Handlers";
import { notFound } from "next/navigation";
import { DeleteEnrollmentConfirm } from "@/app/manage/enrollment/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const enrollment = (await GetEnrollmentRequestHandler(id)).data;

  if (!enrollment) return notFound();

  return (
    <DefaultModal title="Delete Enrollment">
      <div className="w-180">
        <DeleteEnrollmentConfirm enrollment={enrollment} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
