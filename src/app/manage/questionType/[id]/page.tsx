import { GetQuestionTypeRequestHandler } from "@/lib/services/questionType/Handlers";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = async (props) => {
  const { id } = props.params;
  const questionType = (await GetQuestionTypeRequestHandler(id)).data;

  if (!questionType) return notFound();

  const { name, isDeleted, questions } = questionType;

  return (
    <div className="col-span-12">
      <div className="relative bg-secondary/30 p-8 leading-relaxed">
        <p className="block max-w-[50%]">
          <span className="font-semibold tracking-wide text-primary">
            Name:{" "}
          </span>
          {name}
        </p>
        <div className="flex items-center justify-start gap-2.5">
          <span className="font-semibold tracking-wide text-primary">
            Status:{" "}
          </span>
          <span>{isDeleted ? "Disabled" : "Enabled"}</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
