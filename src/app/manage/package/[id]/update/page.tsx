import { GetPackageRequestHandler } from "@/lib/services/package/Handlers";
import { UpdatePackageForm } from "@/app/manage/package/components/Form";
import { notFound } from "next/navigation";
import { GetGradeLevelsRequestHandler } from "@/lib/services/gradeLevel/Handlers";

interface UpdatePackagePageProps {
  params: { id: string };
}

const UpdatePackagePage: React.FC<UpdatePackagePageProps> = async (props) => {
  const { id } = props.params;
  const _package = (await GetPackageRequestHandler(id)).data;
  const payload = await Promise.all([
    GetGradeLevelsRequestHandler({ pageSize: 20 }),
  ]);
  const gradeLevels = payload[0].data?.items;

  if (!gradeLevels || !gradeLevels) return notFound();

  if (!_package || !gradeLevels || !gradeLevels) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdatePackageForm
        package={_package}
        payload={{
          gradeLevels: gradeLevels,
        }}
      />
    </div>
  );
};

export default UpdatePackagePage;
