import { GetSubjectRequestHandler } from "@/lib/services/subject/Handlers";
import { RestoreSubjectConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreSubjectPageProps {
  params: { id: string };
}

const RestoreSubjectPage: React.FC<RestoreSubjectPageProps> = async (props) => {
  const { id } = props.params;
  const subject = (await GetSubjectRequestHandler(id)).data;

  if (!subject) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreSubjectConfirm subject={subject} />
    </div>
  );
};

export default RestoreSubjectPage;
