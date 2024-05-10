"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeleteChapterRequestHandler } from "@/lib/services/chapter/Handlers";
import { useRouter } from "next/navigation";

interface DeleteChapterConfirmProps {
  chapter: Chapter;
}

const DeleteChapterConfirm: React.FC<DeleteChapterConfirmProps> = async (
  props,
) => {
  const chapter = props.chapter;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeleteChapterRequestHandler(chapter.id);

    Toast({
      type: "success",
      message: deleteResult.message,
    });

    if (deleteResult.success) {
      router.refresh();
      router.back();
    }
  };

  return (
    <>
      <Alert
        status={"danger"}
        title={`Confirm delete for item \"${chapter.title}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleDelete} extras="!bg-danger !w-full">
        Delete
      </StyButton>
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
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestoreChapterRequestHandler(id);
    // Toast({
    //   type: "info",
    //   message: restoreResult.message,
    // });
    // if (restoreResult.success) {
    //   router.back();
    // }
  };

  return (
    <>
      <Alert
        status={"warning"}
        title={`Confirm restore for item \"${chapter.title}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleRestore} extras="!bg-warning !w-full">
        Restore
      </StyButton>
    </>
  );
};

export { DeleteChapterConfirm, RestoreChapterConfirm };
