import { GetGradeLevelRequestHandler } from "@/lib/services/gradeLevel/Handlers";
import { RestoreGradeLevelConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreGradeLevelPageProps {
  params: { id: string };
}

const RestoreGradeLevelPage: React.FC<RestoreGradeLevelPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const gradelevel = (await GetGradeLevelRequestHandler(id)).data;

  if (!gradelevel) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreGradeLevelConfirm gradelevel={gradelevel} />
    </div>
  );
};

export default RestoreGradeLevelPage;
