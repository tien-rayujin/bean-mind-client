"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeleteWorksheetTemplateRequestHandler } from "@/lib/services/worksheetTemplate/Handlers";
import { useRouter } from "next/navigation";

interface DeleteWorksheetTemplateConfirmProps {
  worksheetTemplate: WorksheetTemplate;
}

const DeleteWorksheetTemplateConfirm: React.FC<
  DeleteWorksheetTemplateConfirmProps
> = async (props) => {
  const worksheetTemplate = props.worksheetTemplate;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeleteWorksheetTemplateRequestHandler(
      worksheetTemplate.id,
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
        title={`Confirm delete for item \"${worksheetTemplate.id}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleDelete} extras="!bg-danger !w-full">
        Delete
      </StyButton>
    </>
  );
};

interface RestoreWorksheetTemplateConfirmProps {
  worksheetTemplate: WorksheetTemplate;
}

const RestoreWorksheetTemplateConfirm: React.FC<
  RestoreWorksheetTemplateConfirmProps
> = async (props) => {
  const worksheetTemplate = props.worksheetTemplate;
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestoreWorksheetTemplateRequestHandler(id);
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
        title={`Confirm restore for item \"${worksheetTemplate.id}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleRestore} extras="!bg-warning !w-full">
        Restore
      </StyButton>
    </>
  );
};

export { DeleteWorksheetTemplateConfirm, RestoreWorksheetTemplateConfirm };
