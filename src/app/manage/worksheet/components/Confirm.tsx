"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeleteWorksheetRequestHandler } from "@/lib/services/worksheet/Handlers";
import { useRouter } from "next/navigation";

interface DeleteWorksheetConfirmProps {
  worksheet: Worksheet;
}

const DeleteWorksheetConfirm: React.FC<DeleteWorksheetConfirmProps> = async (
  props,
) => {
  const worksheet = props.worksheet;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeleteWorksheetRequestHandler(worksheet.id);

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
        title={`Confirm delete for item \"${worksheet.title}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleDelete} extras="!bg-danger !w-full">
        Delete
      </StyButton>
    </>
  );
};

interface RestoreWorksheetConfirmProps {
  worksheet: Worksheet;
}

const RestoreWorksheetConfirm: React.FC<RestoreWorksheetConfirmProps> = async (
  props,
) => {
  const worksheet = props.worksheet;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestoreWorksheetRequestHandler(id);
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
        title={`Confirm restore for item \"${worksheet.title}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleRestore} extras="!bg-warning !w-full">
        Restore
      </StyButton>
    </>
  );
};

export { DeleteWorksheetConfirm, RestoreWorksheetConfirm };
