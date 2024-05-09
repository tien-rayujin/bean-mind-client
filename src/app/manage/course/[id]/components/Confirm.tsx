import { Alert } from "@/components/Alert";
import { DeleteButton, RestoreButton } from "./Button";

interface DeleteCourseConfirmProps {
  course: Course;
}

const DeleteCourseConfirm: React.FC<DeleteCourseConfirmProps> = async (
  props,
) => {
  const course = props.course;

  return (
    <>
      <Alert
        status={"danger"}
        title={`Confirm delete for item \"${course.title}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <DeleteButton id={course.id} />
    </>
  );
};

interface RestoreCourseConfirmProps {
  course: Course;
}

const RestoreCourseConfirm: React.FC<RestoreCourseConfirmProps> = async (
  props,
) => {
  const course = props.course;

  return (
    <>
      <Alert
        status={"warning"}
        title={`Confirm restore for item \"${course.title}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <RestoreButton id={course.id} />
    </>
  );
};

export { DeleteCourseConfirm, RestoreCourseConfirm };
