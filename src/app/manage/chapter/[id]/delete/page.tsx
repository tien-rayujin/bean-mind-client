import { GetChapterRequestHandler } from "@/lib/services/chapter/Handlers";
import { DeleteChapterConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteChapterPageProps {
  params: { id: string };
}

const DeleteChapterPage: React.FC<DeleteChapterPageProps> = async (props) => {
  const { id } = props.params;
  const chapter = (await GetChapterRequestHandler(id)).data;

  if (!chapter) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteChapterConfirm chapter={chapter} />
    </div>
  );
};

export default DeleteChapterPage;
