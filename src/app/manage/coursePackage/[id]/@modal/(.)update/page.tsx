import React from "react";
import { DefaultModal } from "@/components/Modal";
import { GetCoursePackageRequestHandler } from "@/lib/services/coursePackage/Handlers";
import { UpdateCoursePackageForm } from "@/app/manage/coursePackage/components/Form";
import { notFound } from "next/navigation";
import { GetPackagesRequestHandler } from "@/lib/services/package/Handlers";
import { GetCoursesRequestHandler } from "@/lib/services/course/Handlers";

interface UpdateInterceptRouteProp {
  params: { id: string };
}

const UpdateInterceptRoute: React.FC<UpdateInterceptRouteProp> = async (
  props,
) => {
  const { id } = props.params;
  const coursepackage = (await GetCoursePackageRequestHandler(id)).data;
  const payload = await Promise.all([
    GetPackagesRequestHandler({ pageSize: 20 }),
    GetCoursesRequestHandler({ pageSize: 20 }),
  ]);
  const packages = payload[0].data?.items;
  const courses = payload[1].data?.items;

  if (!packages || !courses) return notFound();

  if (!coursepackage || !packages || !courses) return notFound();

  return (
    <DefaultModal title="Update CoursePackage">
      <div className="w-180">
        <UpdateCoursePackageForm
          coursepackage={coursepackage}
          payload={{
            packages: packages,
            courses: courses,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default UpdateInterceptRoute;
