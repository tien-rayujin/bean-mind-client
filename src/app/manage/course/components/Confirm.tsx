"use client";

import { StyButton } from "@/components/Button";
import { Alert } from "@/components/Alert";
import { Toast } from "@/components/Toast";
import { DeleteCourseRequestHandler } from "@/lib/services/course/Handlers";
import { useRouter } from "next/navigation";

interface DeleteCourseConfirmProps {
  course: Course;
}

const DeleteCourseConfirm: React.FC<DeleteCourseConfirmProps> = async (
  props,
) => {
  const course = props.course;
  const router = useRouter();

  const handleDelete = async () => {
    const deleteResult = await DeleteCourseRequestHandler(course.id);

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
        title={`Confirm delete for item \"${course.title}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleDelete} extras="!bg-danger !w-full">
        Delete
      </StyButton>
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
  const router = useRouter();

  const handleRestore = async () => {
    alert("Restoring...");
    // const restoreResult = await RestoreCourseRequestHandler(id);
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
        title={`Confirm restore for item \"${course.title}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <StyButton onClick={handleRestore} extras="!bg-warning !w-full">
        Restore
      </StyButton>
    </>
  );
};

export { DeleteCourseConfirm, RestoreCourseConfirm };
