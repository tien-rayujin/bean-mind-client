import { Alert } from "@/components/Alert";
import { GetChapterRequestHandler } from "@/lib/services/chapter/Handlers";
import { notFound } from "next/navigation";
import { RestoreButton } from "../components/Button";

interface RestoreChapterPageProps {
  params: { id: string };
}

const RestoreChapterPage: React.FC<RestoreChapterPageProps> = async (props) => {
  const { id } = props.params;
  const chapter = (await GetChapterRequestHandler(id)).data;

  if (!chapter) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Alert
        status={"warning"}
        title={`Confirm restore for item \"${chapter.title}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <RestoreButton id={id} />
    </div>
  );
};

export default RestoreChapterPage;
