import { GetUserRequestHandler } from "@/lib/services/user/Handlers";
import { DeleteUserConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteUserPageProps {
  params: { id: string };
}

const DeleteUserPage: React.FC<DeleteUserPageProps> = async (props) => {
  const { id } = props.params;
  const user = (await GetUserRequestHandler(id)).data;

  if (!user) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteUserConfirm user={user} />
    </div>
  );
};

export default DeleteUserPage;
