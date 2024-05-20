import { GetWorksheetRequestHandler } from "@/lib/services/worksheet/Handlers";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = async (props) => {
  const { id } = props.params;
  const worksheet = (await GetWorksheetRequestHandler(id)).data;

  if (!worksheet) return notFound();

  const {
    title,
    description,
    isDeleted,
    activity,
    worksheetTemplate,
    worksheetQuestions,
  } = worksheet;

  return (
    <div className="col-span-12">
      <div className="relative bg-secondary/30 p-8 leading-relaxed">
        <p>
          <span className="font-semibold tracking-wide text-primary">
            Title:{" "}
          </span>
          {title}
        </p>
        <p className="block max-w-[50%]">
          <span className="font-semibold tracking-wide text-primary">
            Description:{" "}
          </span>
          {description}
        </p>
        <div className="flex items-center justify-start gap-2.5">
          <span className="font-semibold tracking-wide text-primary">
            Status:{" "}
          </span>
          <span>{isDeleted ? "Disabled" : "Enabled"}</span>
        </div>
        {/* <p className="block max-w-[50%]">
          <span className="font-semibold tracking-wide text-primary">
            Activity:{" "}
          </span>
          {activity.title}
        </p> */}
        <div className="block max-w-[50%]">
          <span className="font-semibold tracking-wide text-primary">
            WorksheetTemplate:{" "}
          </span>
          <ul>
            <li>easyQuestion: {worksheetTemplate?.easyQuestionCount}</li>
            <li>normalQuestion: {worksheetTemplate?.normalQuestionCount}</li>
            <li>hardQuestion: {worksheetTemplate?.hardQuestionCount}</li>
            <li>totalQuestion{worksheetTemplate?.totalQuestionCount}</li>
            <li>classification: {worksheetTemplate?.classification}</li>
            <li>subject: {worksheetTemplate?.subjectId}</li>
            <li>topic: {worksheetTemplate?.topicId}</li>
            <li>chapter: {worksheetTemplate?.chapterId}</li>
          </ul>
        </div>
        <p className="block max-w-[50%]">
          <span className="font-semibold tracking-wide text-primary">
            WorksheeetQuestion:{" "}
          </span>
          {JSON.stringify(worksheetQuestions)}
        </p>
      </div>
    </div>
  );
};

export default Page;
