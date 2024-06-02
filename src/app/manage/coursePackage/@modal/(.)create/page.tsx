import React from "react";
import { CreateCoursePackageForm } from "@/app/manage/coursePackage/components/Form";
import { DefaultModal } from "@/components/Modal";
import { GetPackagesRequestHandler } from "@/lib/services/package/Handlers";
import { GetCoursesRequestHandler } from "@/lib/services/course/Handlers";
import { notFound } from "next/navigation";

interface CreateInterceptRouteProp {}

const CreateInterceptRoute: React.FC<CreateInterceptRouteProp> = async (
  props,
) => {
  const payload = await Promise.all([
    GetPackagesRequestHandler({ pageSize: 20 }),
    GetCoursesRequestHandler({ pageSize: 20 }),
  ]);
  const packages = payload[0].data?.items;
  const courses = payload[1].data?.items;

  if (!packages || !courses) return notFound();

  return (
    <DefaultModal title="Create CoursePackage">
      <div className="w-180">
        <CreateCoursePackageForm
          payload={{
            packages: packages,
            courses: courses,
          }}
        />
      </div>
    </DefaultModal>
  );
};

export default CreateInterceptRoute;
