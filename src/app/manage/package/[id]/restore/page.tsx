import { GetPackageRequestHandler } from "@/lib/services/package/Handlers";
import { RestorePackageConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestorePackagePageProps {
  params: { id: string };
}

const RestorePackagePage: React.FC<RestorePackagePageProps> = async (props) => {
  const { id } = props.params;
  const _package = (await GetPackageRequestHandler(id)).data;

  if (!_package) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestorePackageConfirm package={_package} />
    </div>
  );
};

export default RestorePackagePage;
