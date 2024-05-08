import { Alert } from "@/components/Alert";
import Breadcrumb from "@/components/Breadcrumb";
import { GetSubjectRequestHandler } from "@/lib/services/subject/Handlers";
import { notFound } from "next/navigation";
import { RestoreButton } from "../components/Button";

interface RestoreSubjectPageProps {
  params: { id: string };
}

const RestoreSubjectPage: React.FC<RestoreSubjectPageProps> = async (props) => {
  const { id } = props.params;
  const subject = (await GetSubjectRequestHandler(id)).data;

  if (!subject) return notFound();

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Subject Detail" />

      <Alert
        status={"warning"}
        title={`Confirm restore for item \"${subject.title}\"`}
        message="Are you sure to restore(re-enable) this item?"
        extras="mb-4"
      />

      <RestoreButton id={id} />
    </div>
  );
};

export default RestoreSubjectPage;
