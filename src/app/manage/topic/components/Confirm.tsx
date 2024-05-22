"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeleteTopicRequestHandler } from "@/lib/services/topic/Handlers";
import { useRouter } from "next/navigation";

interface DeleteTopicConfirmProps {
  topic: Topic;
}

const DeleteTopicConfirm: React.FC<DeleteTopicConfirmProps> = async (props) => {
  const topic = props.topic;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeleteTopicRequestHandler(topic.id);

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
        title={`Confirm delete for item \"${topic.title}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleDelete} extras="!bg-danger !w-full">
        Delete
      </StyButton>
    </>
  );
};

interface RestoreTopicConfirmProps {
  topic: Topic;
}

const RestoreTopicConfirm: React.FC<RestoreTopicConfirmProps> = async (
  props,
) => {
  const topic = props.topic;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestoreTopicRequestHandler(id);
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
        title={`Confirm restore for item \"${topic.title}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleRestore} extras="!bg-warning !w-full">
        Restore
      </StyButton>
    </>
  );
};

export { DeleteTopicConfirm, RestoreTopicConfirm };
