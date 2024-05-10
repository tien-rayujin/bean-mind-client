import { GetQuestionRequestHandler } from "@/lib/services/question/Handlers";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = async (props) => {
  const { id } = props.params;
  const question = (await GetQuestionRequestHandler(id)).data;

  if (!question) return notFound();

  const {
    text,
    imageUrl,
    isDeleted,
    topic,
    questionType,
    questionLevel,
    questionAnswers,
    worksheetQuestions,
  } = question;

  return (
    <div className="col-span-12">
      <div className="relative bg-secondary/30 p-8 leading-relaxed">
        <p>
          <span className="font-semibold tracking-wide text-primary">
            Text:{" "}
          </span>
          {text}
        </p>
        <p>
          <span className="font-semibold tracking-wide text-primary">
            imageUrl:{" "}
          </span>
          {imageUrl}
        </p>
        <div className="flex items-center justify-start gap-2.5">
          <span className="font-semibold tracking-wide text-primary">
            Status:{" "}
          </span>
          <span>{isDeleted ? "Disabled" : "Enabled"}</span>
        </div>
        <p>
          <span className="font-semibold tracking-wide text-primary">
            Topic:{" "}
          </span>
          {topic.title}
        </p>
        <p>
          <span className="font-semibold tracking-wide text-primary">
            QuestionLevel:{" "}
          </span>
          {questionLevel.name}
        </p>
        <p>
          <span className="font-semibold tracking-wide text-primary">
            QuestionType:{" "}
          </span>
          {questionType.name}
        </p>
      </div>
    </div>
  );
};

export default Page;
