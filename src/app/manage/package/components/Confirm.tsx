"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeletePackageRequestHandler } from "@/lib/services/package/Handlers";
import { useRouter } from "next/navigation";

interface DeletePackageConfirmProps {
  package: Package;
}

const DeletePackageConfirm: React.FC<DeletePackageConfirmProps> = async (
  props,
) => {
  const _package = props.package;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeletePackageRequestHandler(_package.id);

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
        title={`Confirm delete for item \"${_package.name}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleDelete} extras="!bg-danger !w-full">
        Delete
      </StyButton>
    </>
  );
};

interface RestorePackageConfirmProps {
  package: Package;
}

const RestorePackageConfirm: React.FC<RestorePackageConfirmProps> = async (
  props,
) => {
  const _package = props.package;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestorePackageRequestHandler(id);
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
        title={`Confirm restore for item \"${_package.name}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleRestore} extras="!bg-warning !w-full">
        Restore
      </StyButton>
    </>
  );
};

export { DeletePackageConfirm, RestorePackageConfirm };
