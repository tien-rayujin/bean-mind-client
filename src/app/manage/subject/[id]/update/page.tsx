import { GetSubjectRequestHandler } from "@/lib/services/subject/Handlers";
import { UpdateSubjectForm } from "@/app/manage/subject/components/Form";
import { notFound } from "next/navigation";

interface UpdateSubjectPageProps {
  params: { id: string };
}

const UpdateSubjectPage: React.FC<UpdateSubjectPageProps> = async (props) => {
  const { id } = props.params;
  const subject = (await GetSubjectRequestHandler(id)).data;

  if (!subject) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateSubjectForm subject={subject} />
    </div>
  );
};

export default UpdateSubjectPage;
