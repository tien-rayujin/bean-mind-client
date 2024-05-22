import { GetSubjectRequestHandler } from "@/lib/services/subject/Handlers";
import { DeleteSubjectConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteSubjectPageProps {
  params: { id: string };
}

const DeleteSubjectPage: React.FC<DeleteSubjectPageProps> = async (props) => {
  const { id } = props.params;
  const subject = (await GetSubjectRequestHandler(id)).data;

  if (!subject) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteSubjectConfirm subject={subject} />
    </div>
  );
};

export default DeleteSubjectPage;
