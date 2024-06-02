import { GetEnrollmentRequestHandler } from "@/lib/services/enrollment/Handlers";
import { DeleteEnrollmentConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface DeleteEnrollmentPageProps {
  params: { id: string };
}

const DeleteEnrollmentPage: React.FC<DeleteEnrollmentPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const enrollment = (await GetEnrollmentRequestHandler(id)).data;

  if (!enrollment) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <DeleteEnrollmentConfirm enrollment={enrollment} />
    </div>
  );
};

export default DeleteEnrollmentPage;
