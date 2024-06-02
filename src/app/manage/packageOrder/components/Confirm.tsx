"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeletePackageOrderRequestHandler } from "@/lib/services/packageOrder/Handlers";
import { useRouter } from "next/navigation";

interface DeletePackageOrderConfirmProps {
  packageorder: PackageOrder;
}

const DeletePackageOrderConfirm: React.FC<
  DeletePackageOrderConfirmProps
> = async (props) => {
  const packageorder = props.packageorder;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeletePackageOrderRequestHandler(
      packageorder.id,
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

interface RestorePackageOrderConfirmProps {
  packageorder: PackageOrder;
}

const RestorePackageOrderConfirm: React.FC<
  RestorePackageOrderConfirmProps
> = async (props) => {
  const packageorder = props.packageorder;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestorePackageOrderRequestHandler(id);
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

export { DeletePackageOrderConfirm, RestorePackageOrderConfirm };
