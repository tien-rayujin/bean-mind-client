import { GetActivityTypeRequestHandler } from "@/lib/services/activityType/Handlers";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = async (props) => {
  const { id } = props.params;
  const activityType = (await GetActivityTypeRequestHandler(id)).data;

  if (!activityType) return notFound();

  const { name, isDeleted, activities } = activityType;

  return (
    <div className="col-span-12">
      <div className="relative bg-background p-8 leading-relaxed">
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
