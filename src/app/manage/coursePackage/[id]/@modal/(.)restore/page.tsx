import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetCoursePackageRequestHandler } from "@/lib/services/coursePackage/Handlers";
import { notFound } from "next/navigation";
import { RestoreCoursePackageConfirm } from "@/app/manage/coursePackage/components/Confirm";

interface RestoreInterceptRouteProp {
  params: { id: string };
}

const RestoreInterceptRoute: React.FC<RestoreInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const coursepackage = (await GetCoursePackageRequestHandler(id)).data;

  if (!coursepackage) return notFound();

  return (
    <DefaultModal title="Restore CoursePackage">
      <div className="w-180">
        <RestoreCoursePackageConfirm coursepackage={coursepackage} />
      </div>
    </DefaultModal>
  );
};

export default RestoreInterceptRoute;
