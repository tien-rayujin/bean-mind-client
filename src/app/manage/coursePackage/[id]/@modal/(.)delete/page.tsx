import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetCoursePackageRequestHandler } from "@/lib/services/coursePackage/Handlers";
import { notFound } from "next/navigation";
import { DeleteCoursePackageConfirm } from "@/app/manage/coursePackage/components/Confirm";

interface DeleteInterceptRouteProp {
  params: { id: string };
}

const DeleteInterceptRoute: React.FC<DeleteInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const coursepackage = (await GetCoursePackageRequestHandler(id)).data;

  if (!coursepackage) return notFound();

  return (
    <DefaultModal title="Delete CoursePackage">
      <div className="w-180">
        <DeleteCoursePackageConfirm coursepackage={coursepackage} />
      </div>
    </DefaultModal>
  );
};

export default DeleteInterceptRoute;
