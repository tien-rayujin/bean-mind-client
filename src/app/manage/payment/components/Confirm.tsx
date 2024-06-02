"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeletePaymentRequestHandler } from "@/lib/services/payment/Handlers";
import { useRouter } from "next/navigation";

interface DeletePaymentConfirmProps {
  payment: Payment;
}

const DeletePaymentConfirm: React.FC<DeletePaymentConfirmProps> = async (
  props,
) => {
  const payment = props.payment;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeletePaymentRequestHandler(payment.id);

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

interface RestorePaymentConfirmProps {
  payment: Payment;
}

const RestorePaymentConfirm: React.FC<RestorePaymentConfirmProps> = async (
  props,
) => {
  const payment = props.payment;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestorePaymentRequestHandler(id);
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

export { DeletePaymentConfirm, RestorePaymentConfirm };
