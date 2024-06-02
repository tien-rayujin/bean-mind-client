"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeleteGradeLevelRequestHandler } from "@/lib/services/gradeLevel/Handlers";
import { useRouter } from "next/navigation";

interface DeleteGradeLevelConfirmProps {
  gradeLevel: GradeLevel;
}

const DeleteGradeLevelConfirm: React.FC<DeleteGradeLevelConfirmProps> = async (
  props,
) => {
  const gradeLevel = props.gradeLevel;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeleteGradeLevelRequestHandler(gradeLevel.id);

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
        title={`Confirm delete for item \"${gradeLevel.name}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleDelete} extras="!bg-danger !w-full">
        Delete
      </StyButton>
    </>
  );
};

interface RestoreGradeLevelConfirmProps {
  gradeLevel: GradeLevel;
}

const RestoreGradeLevelConfirm: React.FC<
  RestoreGradeLevelConfirmProps
> = async (props) => {
  const gradeLevel = props.gradeLevel;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestoreGradeLevelRequestHandler(id);
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
        title={`Confirm restore for item \"${gradeLevel.name}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleRestore} extras="!bg-warning !w-full">
        Restore
      </StyButton>
    </>
  );
};

export { DeleteGradeLevelConfirm, RestoreGradeLevelConfirm };
