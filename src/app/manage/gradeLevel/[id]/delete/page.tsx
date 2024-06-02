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
  const gradeLevel = (await GetGradeLevelRequestHandler(id)).data;

  if (!gradeLevel) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteGradeLevelConfirm gradeLevel={gradeLevel} />
    </div>
  );
};

export default DeleteGradeLevelPage;
