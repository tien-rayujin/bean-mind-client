import { GetCoursePackageRequestHandler } from "@/lib/services/coursePackage/Handlers";
import { DeleteCoursePackageConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteCoursePackagePageProps {
  params: { id: string };
}

const DeleteCoursePackagePage: React.FC<DeleteCoursePackagePageProps> = async (
  props,
) => {
  const { id } = props.params;
  const coursepackage = (await GetCoursePackageRequestHandler(id)).data;

  if (!coursepackage) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteCoursePackageConfirm coursepackage={coursepackage} />
    </div>
  );
};

export default DeleteCoursePackagePage;
