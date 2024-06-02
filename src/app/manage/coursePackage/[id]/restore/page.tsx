import { GetCoursePackageRequestHandler } from "@/lib/services/coursePackage/Handlers";
import { RestoreCoursePackageConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreCoursePackagePageProps {
  params: { id: string };
}

const RestoreCoursePackagePage: React.FC<
  RestoreCoursePackagePageProps
> = async (props) => {
  const { id } = props.params;
  const coursepackage = (await GetCoursePackageRequestHandler(id)).data;

  if (!coursepackage) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreCoursePackageConfirm coursepackage={coursepackage} />
    </div>
  );
};

export default RestoreCoursePackagePage;
