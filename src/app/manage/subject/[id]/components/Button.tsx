"use client";

import { StyButton } from "@/components/Button";
import { Toast } from "@/components/Toast";
import { DeleteSubjectRequestHandler } from "@/lib/services/subject/Handlers";
import { useRouter } from "next/navigation";

interface DeleteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = (props) => {
  const { id, ...rest } = props;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeleteSubjectRequestHandler(id);

    Toast({
      type: "success",
      message: deleteResult.message,
    });

    if (deleteResult.success) {
      router.back();
    }
  };

  return (
    <StyButton onClick={handleDelete} {...rest} extras="!bg-danger !w-full">
      Delete
    </StyButton>
  );
};

interface RestoreButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
}

const RestoreButton: React.FC<RestoreButtonProps> = (props) => {
  const { id, ...rest } = props;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestoreSubjectRequestHandler(id);
    // Toast({
    //   type: "info",
    //   message: restoreResult.message,
    // });
    // if (restoreResult.success) {
    //   router.back();
    // }
  };

  return (
    <StyButton onClick={handleRestore} {...rest} extras="!bg-warning !w-full">
      Restore
    </StyButton>
  );
};

export { DeleteButton, RestoreButton };
