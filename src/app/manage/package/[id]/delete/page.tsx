import { GetPackageRequestHandler } from "@/lib/services/package/Handlers";
import { DeletePackageConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeletePackagePageProps {
  params: { id: string };
}

const DeletePackagePage: React.FC<DeletePackagePageProps> = async (props) => {
  const { id } = props.params;
  const _package = (await GetPackageRequestHandler(id)).data;

  if (!_package) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeletePackageConfirm package={_package} />
    </div>
  );
};

export default DeletePackagePage;
