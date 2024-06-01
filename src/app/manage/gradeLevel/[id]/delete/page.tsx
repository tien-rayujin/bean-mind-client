import { GetGradeLevelRequestHandler } from "@/lib/services/gradeLevel/Handlers";
import { DeleteGradeLevelConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteGradeLevelPageProps {
  params: { id: string };
}

const DeleteGradeLevelPage: React.FC<DeleteGradeLevelPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const gradelevel = (await GetGradeLevelRequestHandler(id)).data;

  if (!gradelevel) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteGradeLevelConfirm gradelevel={gradelevel} />
    </div>
  );
};

export default DeleteGradeLevelPage;
