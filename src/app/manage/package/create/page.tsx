import Breadcrumb from "@/components/Breadcrumb";
import { CreatePackageForm } from "../components/Form";
import { GetGradeLevelsRequestHandler } from "@/lib/services/gradeLevel/Handlers";
import { notFound } from "next/navigation";

interface CreatePackagePageProps {}

const CreatePackagePage: React.FC<CreatePackagePageProps> = async (props) => {
  const payload = await Promise.all([
    GetGradeLevelsRequestHandler({ pageSize: 20 }),
  ]);
  const gradeLevels = payload[0].data?.items;

  if (!gradeLevels || !gradeLevels) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Create package" />

      <CreatePackageForm
        payload={{
          gradeLevels: gradeLevels,
        }}
      />
    </div>
  );
};

export default CreatePackagePage;
