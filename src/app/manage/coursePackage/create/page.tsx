import Breadcrumb from "@/components/Breadcrumb";
import { CreateCoursePackageForm } from "../components/Form";
import { GetPackagesRequestHandler } from "@/lib/services/package/Handlers";
import { GetCoursesRequestHandler } from "@/lib/services/course/Handlers";
import { notFound } from "next/navigation";

interface CreateCoursePackagePageProps {}

const CreateCoursePackagePage: React.FC<CreateCoursePackagePageProps> = async (
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
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create coursepackage" />

      <CreateCoursePackageForm
        payload={{
          packages: packages,
          courses: courses,
        }}
      />
    </div>
  );
};

export default CreateCoursePackagePage;
