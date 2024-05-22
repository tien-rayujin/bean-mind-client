import { StyButton } from "@/components/Button";
import { GetActivityRequestHandler } from "@/lib/services/activity/Handlers";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = async (props) => {
  const { id } = props.params;
  const activity = (await GetActivityRequestHandler(id)).data;

  if (!activity) return notFound();

  const { activityType, topic, documents, videos, worksheets, isDeleted } =
    activity;

  return (
    <div className="col-span-12">
      <div className="relative bg-secondary/30 p-8 leading-relaxed">
        <p>
          <span className="font-semibold tracking-wide text-primary">
            Type:{" "}
          </span>
          {activityType.name}
        </p>
        <p className="block max-w-[50%]">
          <span className="font-semibold tracking-wide text-primary">
            Topic:{" "}
          </span>
          {topic.title}
        </p>
        <div className="flex items-center justify-start gap-2.5">
          <span className="font-semibold tracking-wide text-primary">
            Status:{" "}
          </span>
          <span>{isDeleted ? "Disabled" : "Enabled"}</span>
        </div>

        {documents &&
          documents.map((item, index) => {
            return (
              <p key={item.id} className="block max-w-[50%]">
                <span className="font-semibold tracking-wide text-primary">
                  Document {index + 1}:{" "}
                </span>
                {item.title}
              </p>
            );
          })}
        {videos &&
          videos.map((item, index) => {
            return (
              <p key={item.id} className="block max-w-[50%]">
                <span className="font-semibold tracking-wide text-primary">
                  Videos {index + 1}:{" "}
                </span>
                {item.title}
              </p>
            );
          })}
        {worksheets &&
          worksheets.map((item, index) => {
            return (
              <p key={item.id} className="block max-w-[50%]">
                <span className="font-semibold tracking-wide text-primary">
                  Worksheet {index + 1}:{" "}
                </span>
                {JSON.stringify(item)}
                <Link href={`/manage/worksheet/${item.id}`}>
                  <StyButton>Jump to Worksheet</StyButton>
                </Link>
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default Page;
