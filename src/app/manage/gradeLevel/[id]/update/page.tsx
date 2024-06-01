import { GetGradeLevelRequestHandler } from "@/lib/services/gradeLevel/Handlers";
import { UpdateGradeLevelForm } from "@/app/manage/gradeLevel/components/Form";
import { notFound } from "next/navigation";

interface UpdateGradeLevelPageProps {
  params: { id: string };
}

const UpdateGradeLevelPage: React.FC<UpdateGradeLevelPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const gradelevel = (await GetGradeLevelRequestHandler(id)).data;

  if (!gradelevel) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateGradeLevelForm gradelevel={gradelevel} />
    </div>
  );
};

export default UpdateGradeLevelPage;
