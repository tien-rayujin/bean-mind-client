"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeleteUserRequestHandler } from "@/lib/services/user/Handlers";
import { useRouter } from "next/navigation";

interface DeleteUserConfirmProps {
  user: AppUser;
}

const DeleteUserConfirm: React.FC<DeleteUserConfirmProps> = async (props) => {
  const user = props.user;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeleteUserRequestHandler(user.id);

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
        title={`Confirm delete for item \"${user.email}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleDelete} extras="!bg-danger !w-full">
        Delete
      </StyButton>
    </>
  );
};

interface RestoreUserConfirmProps {
  user: AppUser;
}

const RestoreUserConfirm: React.FC<RestoreUserConfirmProps> = async (props) => {
  const user = props.user;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestoreUserRequestHandler(id);
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
        title={`Confirm restore for item \"${user.email}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleRestore} extras="!bg-warning !w-full">
        Restore
      </StyButton>
    </>
  );
};

export { DeleteUserConfirm, RestoreUserConfirm };
