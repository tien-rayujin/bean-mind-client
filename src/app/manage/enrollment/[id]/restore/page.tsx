import { GetEnrollmentRequestHandler } from "@/lib/services/enrollment/Handlers";
import { RestoreEnrollmentConfirm } from "../../components/Confirm";
import { notFound } from "next/navigation";

interface RestoreEnrollmentPageProps {
  params: { id: string };
}

const RestoreEnrollmentPage: React.FC<RestoreEnrollmentPageProps> = async (
  props,
) => {
  const { id } = props.params;
  const enrollment = (await GetEnrollmentRequestHandler(id)).data;

  if (!enrollment) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <RestoreEnrollmentConfirm enrollment={enrollment} />
    </div>
  );
};

export default RestoreEnrollmentPage;
