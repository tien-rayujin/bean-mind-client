import { Alert } from "@/components/Alert";
import { DeleteButton, RestoreButton } from "./Button";

interface DeleteChapterConfirmProps {
  chapter: Chapter;
}

const DeleteChapterConfirm: React.FC<DeleteChapterConfirmProps> = async (
  props,
) => {
  const chapter = props.chapter;

  return (
    <>
      <Alert
        status={"danger"}
        title={`Confirm delete for item \"${chapter.title}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <DeleteButton id={chapter.id} />
    </>
  );
};

interface RestoreChapterConfirmProps {
  chapter: Chapter;
}

const RestoreChapterConfirm: React.FC<RestoreChapterConfirmProps> = async (
  props,
) => {
  const chapter = props.chapter;

  return (
    <>
      <Alert
        status={"warning"}
        title={`Confirm restore for item \"${chapter.title}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <RestoreButton id={chapter.id} />
    </>
  );
};

export { DeleteChapterConfirm, RestoreChapterConfirm };
