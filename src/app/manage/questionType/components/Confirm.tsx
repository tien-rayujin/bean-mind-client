"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeleteQuestionTypeRequestHandler } from "@/lib/services/questionType/Handlers";
import { useRouter } from "next/navigation";

interface DeleteQuestionTypeConfirmProps {
  questionType: QuestionType;
}

const DeleteQuestionTypeConfirm: React.FC<
  DeleteQuestionTypeConfirmProps
> = async (props) => {
  const questionType = props.questionType;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeleteQuestionTypeRequestHandler(
      questionType.id,
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
        title={`Confirm delete for item \"${questionType.name}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleDelete} extras="!bg-danger !w-full">
        Delete
      </StyButton>
    </>
  );
};

interface RestoreQuestionTypeConfirmProps {
  questionType: QuestionType;
}

const RestoreQuestionTypeConfirm: React.FC<
  RestoreQuestionTypeConfirmProps
> = async (props) => {
  const questionType = props.questionType;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestoreQuestionTypeRequestHandler(id);
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
        title={`Confirm restore for item \"${questionType.name}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleRestore} extras="!bg-warning !w-full">
        Restore
      </StyButton>
    </>
  );
};

export { DeleteQuestionTypeConfirm, RestoreQuestionTypeConfirm };
