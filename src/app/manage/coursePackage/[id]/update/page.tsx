import { GetCoursePackageRequestHandler } from "@/lib/services/coursePackage/Handlers";
import { UpdateCoursePackageForm } from "@/app/manage/coursePackage/components/Form";
import { notFound } from "next/navigation";
import { GetPackagesRequestHandler } from "@/lib/services/package/Handlers";
import { GetCoursesRequestHandler } from "@/lib/services/course/Handlers";

interface UpdateCoursePackagePageProps {
  params: { id: string };
}

const UpdateCoursePackagePage: React.FC<UpdateCoursePackagePageProps> = async (
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
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateCoursePackageForm
        coursepackage={coursepackage}
        payload={{
          packages: packages,
          courses: courses,
        }}
      />
    </div>
  );
};

export default UpdateCoursePackagePage;
