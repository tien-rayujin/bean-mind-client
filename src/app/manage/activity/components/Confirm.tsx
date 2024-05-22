"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeleteActivityRequestHandler } from "@/lib/services/activity/Handlers";
import { useRouter } from "next/navigation";

interface DeleteActivityConfirmProps {
  activity: Activity;
}

const DeleteActivityConfirm: React.FC<DeleteActivityConfirmProps> = async (
  props,
) => {
  const activity = props.activity;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeleteActivityRequestHandler(activity.id);

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
        title={`Confirm delete for item \"${activity.id}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleDelete} extras="!bg-danger !w-full">
        Delete
      </StyButton>
    </>
  );
};

interface RestoreActivityConfirmProps {
  activity: Activity;
}

const RestoreActivityConfirm: React.FC<RestoreActivityConfirmProps> = async (
  props,
) => {
  const activity = props.activity;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestoreActivityRequestHandler(id);
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
        title={`Confirm restore for item \"${activity.id}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleRestore} extras="!bg-warning !w-full">
        Restore
      </StyButton>
    </>
  );
};

export { DeleteActivityConfirm, RestoreActivityConfirm };
