"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeleteQuestionRequestHandler } from "@/lib/services/question/Handlers";
import { useRouter } from "next/navigation";

interface DeleteQuestionConfirmProps {
  question: Question;
}

const DeleteQuestionConfirm: React.FC<DeleteQuestionConfirmProps> = async (
  props,
) => {
  const question = props.question;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeleteQuestionRequestHandler(question.id);

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
        title={`Confirm delete for item \"${question.text}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleDelete} extras="!bg-danger !w-full">
        Delete
      </StyButton>
    </>
  );
};

interface RestoreQuestionConfirmProps {
  question: Question;
}

const RestoreQuestionConfirm: React.FC<RestoreQuestionConfirmProps> = async (
  props,
) => {
  const question = props.question;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestoreQuestionRequestHandler(id);
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
        title={`Confirm restore for item \"${question.text}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleRestore} extras="!bg-warning !w-full">
        Restore
      </StyButton>
    </>
  );
};

export { DeleteQuestionConfirm, RestoreQuestionConfirm };
