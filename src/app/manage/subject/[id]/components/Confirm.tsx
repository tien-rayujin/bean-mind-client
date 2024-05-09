import { Alert } from "@/components/Alert";
import { DeleteButton, RestoreButton } from "./Button";

interface DeleteSubjectConfirmProps {
  subject: Subject;
}

const DeleteSubjectConfirm: React.FC<DeleteSubjectConfirmProps> = async (
  props,
) => {
  const subject = props.subject;

  return (
    <>
      <Alert
        status={"danger"}
        title={`Confirm delete for item \"${subject.title}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <DeleteButton id={subject.id} />
    </>
  );
};

interface RestoreSubjectConfirmProps {
  subject: Subject;
}

const RestoreSubjectConfirm: React.FC<RestoreSubjectConfirmProps> = async (
  props,
) => {
  const subject = props.subject;

  return (
    <>
      <Alert
        status={"warning"}
        title={`Confirm restore for item \"${subject.title}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <RestoreButton id={subject.id} />
    </>
  );
};

export { DeleteSubjectConfirm, RestoreSubjectConfirm };
