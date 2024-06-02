"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeleteEnrollmentRequestHandler } from "@/lib/services/enrollment/Handlers";
import { useRouter } from "next/navigation";

interface DeleteEnrollmentConfirmProps {
  enrollment: Enrollment;
}

const DeleteEnrollmentConfirm: React.FC<DeleteEnrollmentConfirmProps> = async (
  props,
) => {
  const enrollment = props.enrollment;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeleteEnrollmentRequestHandler(enrollment.id);

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

interface RestoreEnrollmentConfirmProps {
  enrollment: Enrollment;
}

const RestoreEnrollmentConfirm: React.FC<
  RestoreEnrollmentConfirmProps
> = async (props) => {
  const enrollment = props.enrollment;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestoreEnrollmentRequestHandler(id);
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

export { DeleteEnrollmentConfirm, RestoreEnrollmentConfirm };
