import { GetUserRequestHandler } from "@/lib/services/user/Handlers";
import { RestoreUserConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreUserPageProps {
  params: { id: string };
}

const RestoreUserPage: React.FC<RestoreUserPageProps> = async (props) => {
  const { id } = props.params;
  const user = (await GetUserRequestHandler(id)).data;

  if (!user) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreUserConfirm user={user} />
    </div>
  );
};

export default RestoreUserPage;
