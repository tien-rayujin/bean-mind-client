import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetCourseRequestHandler } from "@/lib/services/course/Handlers";
import { notFound } from "next/navigation";
import { RestoreCourseConfirm } from "../../components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const course = (await GetCourseRequestHandler(id)).data;

  if (!course) return notFound();

  return (
    <DefaultModal title="Restore Course">
      <div className="w-180">
        <RestoreCourseConfirm course={course} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
