import { GetSessionRequestHandler } from "@/lib/services/session/Handlers";
import { DeleteSessionConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteSessionPageProps {
  params: { id: string };
}

const DeleteSessionPage: React.FC<DeleteSessionPageProps> = async (props) => {
  const { id } = props.params;
  const session = (await GetSessionRequestHandler(id)).data;

  if (!session) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteSessionConfirm session={session} />
    </div>
  );
};

export default DeleteSessionPage;
