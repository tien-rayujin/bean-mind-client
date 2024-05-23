import { GetQuestionRequestHandler } from "@/lib/services/question/Handlers";
import clsx from "clsx";
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
      <div className="relative bg-background p-8 leading-relaxed">
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

      <div>
        <h2 className="text-xl font-semibold">Options: </h2>
        {questionAnswers.map((ans) => {
          return (
            <li
              key={ans.id}
              className={clsx(
                "ml-4 w-full p-2",
                ans.isCorrect && "bg-success/50",
              )}
            >
              {ans.text}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
