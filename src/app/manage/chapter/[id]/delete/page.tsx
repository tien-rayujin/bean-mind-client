import { Alert } from "@/components/Alert";
import { GetChapterRequestHandler } from "@/lib/services/chapter/Handlers";
import { notFound } from "next/navigation";
import { DeleteButton } from "../components/Button";

interface DeleteChapterPageProps {
  params: { id: string };
}

const DeleteChapterPage: React.FC<DeleteChapterPageProps> = async (props) => {
  const { id } = props.params;
  const chapter = (await GetChapterRequestHandler(id)).data;

  if (!chapter) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Alert
        status={"danger"}
        title={`Confirm delete for item \"${chapter.title}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <DeleteButton id={id} />
    </div>
  );
};

export default DeleteChapterPage;
