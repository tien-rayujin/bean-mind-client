import { GetChapterRequestHandler } from "@/lib/services/chapter/Handlers";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = async (props) => {
  const { id } = props.params;
  const chapter = (await GetChapterRequestHandler(id)).data;

  if (!chapter) return notFound();

  const { title, description, isDeleted, course, topics } = chapter;

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
            Course:{" "}
          </span>
          {course.title}
        </p>
      </div>
    </div>
  );
};

export default Page;

/* Directory */

/* <div className="scrollbar col-span-4 overflow-auto">
          <div className="grid grid-cols-1 gap-2.5 bg-secondary/30 p-8">
            <div className="relative mb-4 h-12 rounded-md bg-secondary/30">
              <input
                type="text"
                className="h-full w-full bg-transparent pl-4 pr-12 outline-none"
                placeholder="Search..."
              />
              <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
            </div>

            {chapterList}
          </div>
        </div> */
