import { GetChapterRequestHandler } from "@/lib/services/chapter/Handlers";
import { RestoreChapterConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreChapterPageProps {
  params: { id: string };
}

const RestoreChapterPage: React.FC<RestoreChapterPageProps> = async (props) => {
  const { id } = props.params;
  const chapter = (await GetChapterRequestHandler(id)).data;

  if (!chapter) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreChapterConfirm chapter={chapter} />
    </div>
  );
};

export default RestoreChapterPage;
