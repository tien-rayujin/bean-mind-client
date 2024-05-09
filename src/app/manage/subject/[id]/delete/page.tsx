import { Alert } from "@/components/Alert";
import Breadcrumb from "@/components/Breadcrumb";
import { GetSubjectRequestHandler } from "@/lib/services/subject/Handlers";
import { notFound } from "next/navigation";
import { DeleteButton } from "../components/Button";

interface DeleteSubjectPageProps {
  params: { id: string };
}

const DeleteSubjectPage: React.FC<DeleteSubjectPageProps> = async (props) => {
  const { id } = props.params;
  const subject = (await GetSubjectRequestHandler(id)).data;

  if (!subject) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Subject Detail" />

      <Alert
        status={"danger"}
        title={`Confirm delete for item \"${subject.title}\"`}
        message="Are you sure to delete(disable) this item?"
        extras="mb-4"
      />

      <DeleteButton id={id} />
    </div>
  );
};

export default DeleteSubjectPage;
