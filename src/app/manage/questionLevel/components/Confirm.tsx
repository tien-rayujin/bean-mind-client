"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeleteQuestionLevelRequestHandler } from "@/lib/services/questionLevel/Handlers";
import { useRouter } from "next/navigation";

interface DeleteQuestionLevelConfirmProps {
  questionLevel: QuestionLevel;
}

const DeleteQuestionLevelConfirm: React.FC<
  DeleteQuestionLevelConfirmProps
> = async (props) => {
  const questionLevel = props.questionLevel;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeleteQuestionLevelRequestHandler(
      questionLevel.id,
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
        title={`Confirm delete for item \"${questionLevel.name}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleDelete} extras="!bg-danger !w-full">
        Delete
      </StyButton>
    </>
  );
};

interface RestoreQuestionLevelConfirmProps {
  questionLevel: QuestionLevel;
}

const RestoreQuestionLevelConfirm: React.FC<
  RestoreQuestionLevelConfirmProps
> = async (props) => {
  const questionLevel = props.questionLevel;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestoreQuestionLevelRequestHandler(id);
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
        title={`Confirm restore for item \"${questionLevel.name}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleRestore} extras="!bg-warning !w-full">
        Restore
      </StyButton>
    </>
  );
};

export { DeleteQuestionLevelConfirm, RestoreQuestionLevelConfirm };
