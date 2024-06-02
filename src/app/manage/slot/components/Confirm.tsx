"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeleteSlotRequestHandler } from "@/lib/services/slot/Handlers";
import { useRouter } from "next/navigation";

interface DeleteSlotConfirmProps {
  slot: Slot;
}

const DeleteSlotConfirm: React.FC<DeleteSlotConfirmProps> = async (props) => {
  const slot = props.slot;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeleteSlotRequestHandler(slot.id);

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
        title={`Confirm delete for item \"${slot.startTime}\" - \"${slot.endTime}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleDelete} extras="!bg-danger !w-full">
        Delete
      </StyButton>
    </>
  );
};

interface RestoreSlotConfirmProps {
  slot: Slot;
}

const RestoreSlotConfirm: React.FC<RestoreSlotConfirmProps> = async (props) => {
  const slot = props.slot;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestoreSlotRequestHandler(id);
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
        title={`Confirm restore for item \"${slot.startTime}\" - \"${slot.endTime}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleRestore} extras="!bg-warning !w-full">
        Restore
      </StyButton>
    </>
  );
};

export { DeleteSlotConfirm, RestoreSlotConfirm };
