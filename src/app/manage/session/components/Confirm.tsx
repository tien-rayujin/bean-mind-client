"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeleteSessionRequestHandler } from "@/lib/services/session/Handlers";
import { useRouter } from "next/navigation";

interface DeleteSessionConfirmProps {
  session: Session;
}

const DeleteSessionConfirm: React.FC<DeleteSessionConfirmProps> = async (
  props,
) => {
  const session = props.session;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeleteSessionRequestHandler(session.id);

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
        title={`Confirm delete for item \"${""}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleDelete} extras="!bg-danger !w-full">
        Delete
      </StyButton>
    </>
  );
};

interface RestoreSessionConfirmProps {
  session: Session;
}

const RestoreSessionConfirm: React.FC<RestoreSessionConfirmProps> = async (
  props,
) => {
  const session = props.session;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestoreSessionRequestHandler(id);
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
        title={`Confirm restore for item \"${""}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleRestore} extras="!bg-warning !w-full">
        Restore
      </StyButton>
    </>
  );
};

export { DeleteSessionConfirm, RestoreSessionConfirm };
