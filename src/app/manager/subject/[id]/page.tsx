import Breadcrumb from "@/components/Breadcrumb";
import { ActionButton } from "@/components/Form/Button";
import { GetSubjectRequestHandler } from "@/lib/services/subject/Handlers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaPen, FaRedo, FaTrash } from "react-icons/fa";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = async (props) => {
  const { id } = props.params;
  const subject = (await GetSubjectRequestHandler(id)).data;

  if (!subject) return notFound();

  const { title, description, isDeleted, courses } = subject;

  return (
    <div className="flex h-full max-h-full flex-col overflow-y-hidden">
      <Breadcrumb pageName="Subject Detail" />

      <div className="grid h-full max-h-full flex-1 grid-cols-12 gap-4">
        {/* Content */}
        <div className="col-span-12">
          {/* <AlertSnack
            status="success"
            message="Update successful"
            extras="mb-6"
          /> */}

          <div className="relative bg-secondary/30 p-8 leading-relaxed">
            {/* Action button */}
            <div className="absolute right-4 top-4 flex items-center gap-2.5">
              <Link href={`/manager/subject/${id}/update`}>
                <ActionButton color="primary">
                  <FaPen />
                </ActionButton>
              </Link>
              <Link href={`/manager/subject/${id}/restore`}>
                <ActionButton color="accent">
                  <FaRedo />
                </ActionButton>
              </Link>
              <Link href={`/manager/subject/${id}/delete`}>
                <ActionButton color="accent">
                  <FaTrash />
                </ActionButton>
              </Link>
            </div>

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
            <p>
              <span className="font-semibold tracking-wide text-primary">
                Status:{" "}
              </span>
              {isDeleted ? "Disabled" : "Enabled"}
            </p>
          </div>
        </div>

        {/* Directory */}
        {/* <div className="scrollbar col-span-4 overflow-auto">
          <div className="grid grid-cols-1 gap-2.5 bg-secondary/30 p-8">
            <div className="relative mb-4 h-12 rounded-md bg-secondary/30">
              <input
                type="text"
                className="h-full w-full bg-transparent pl-4 pr-12 outline-none"
                placeholder="Search..."
              />
              <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
            </div>

            {courseList}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
