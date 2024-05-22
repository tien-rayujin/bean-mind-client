"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeleteSubjectRequestHandler } from "@/lib/services/subject/Handlers";
import { useRouter } from "next/navigation";

interface DeleteSubjectConfirmProps {
  subject: Subject;
}

const DeleteSubjectConfirm: React.FC<DeleteSubjectConfirmProps> = async (
  props,
) => {
  const subject = props.subject;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeleteSubjectRequestHandler(subject.id);

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
        title={`Confirm delete for item \"${subject.title}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleDelete} extras="!bg-danger !w-full">
        Delete
      </StyButton>
    </>
  );
};

interface RestoreSubjectConfirmProps {
  subject: Subject;
}

const RestoreSubjectConfirm: React.FC<RestoreSubjectConfirmProps> = async (
  props,
) => {
  const subject = props.subject;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestoreSubjectRequestHandler(id);
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
        title={`Confirm restore for item \"${subject.title}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleRestore} extras="!bg-warning !w-full">
        Restore
      </StyButton>
    </>
  );
};

export { DeleteSubjectConfirm, RestoreSubjectConfirm };
