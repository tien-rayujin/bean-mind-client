import { GetTopicRequestHandler } from "@/lib/services/topic/Handlers";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = async (props) => {
  const { id } = props.params;
  const topic = (await GetTopicRequestHandler(id)).data;

  if (!topic) return notFound();

  const { title, description, isDeleted, chapter, activities } = topic;

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
        <p className="block max-w-[50%]">
          <span className="font-semibold tracking-wide text-primary">
            Chapter:{" "}
          </span>
          {chapter.title}
        </p>
      </div>
    </div>
  );
};

export default Page;
