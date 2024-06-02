import { GetSessionRequestHandler } from "@/lib/services/session/Handlers";
import { RestoreSessionConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreSessionPageProps {
  params: { id: string };
}

const RestoreSessionPage: React.FC<RestoreSessionPageProps> = async (props) => {
  const { id } = props.params;
  const session = (await GetSessionRequestHandler(id)).data;

  if (!session) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreSessionConfirm session={session} />
    </div>
  );
};

export default RestoreSessionPage;
