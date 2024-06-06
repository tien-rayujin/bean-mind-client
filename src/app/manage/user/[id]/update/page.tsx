import { GetUserRequestHandler } from "@/lib/services/user/Handlers";
import { UpdateUserForm } from "@/app/manage/user/components/Form";
import { notFound } from "next/navigation";

interface UpdateUserPageProps {
  params: { id: string };
}

const UpdateUserPage: React.FC<UpdateUserPageProps> = async (props) => {
  const { id } = props.params;
  const user = (await GetUserRequestHandler(id)).data;

  if (!user) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <UpdateUserForm user={user} />
    </div>
  );
};

export default UpdateUserPage;
