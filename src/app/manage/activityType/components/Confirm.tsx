"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeleteActivityTypeRequestHandler } from "@/lib/services/activityType/Handlers";
import { useRouter } from "next/navigation";

interface DeleteActivityTypeConfirmProps {
  activityType: ActivityType;
}

const DeleteActivityTypeConfirm: React.FC<
  DeleteActivityTypeConfirmProps
> = async (props) => {
  const activityType = props.activityType;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeleteActivityTypeRequestHandler(
      activityType.id,
    );

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
        title={`Confirm delete for item \"${activityType.name}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleDelete} extras="!bg-danger !w-full">
        Delete
      </StyButton>
    </>
  );
};

interface RestoreActivityTypeConfirmProps {
  activityType: ActivityType;
}

const RestoreActivityTypeConfirm: React.FC<
  RestoreActivityTypeConfirmProps
> = async (props) => {
  const activityType = props.activityType;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestoreActivityTypeRequestHandler(id);
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
        title={`Confirm restore for item \"${activityType.name}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleRestore} extras="!bg-warning !w-full">
        Restore
      </StyButton>
    </>
  );
};

export { DeleteActivityTypeConfirm, RestoreActivityTypeConfirm };
