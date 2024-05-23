import {
  UpdateButton,
  DeleteButton,
  RestoreButton,
} from "@/components/Form/Button";
import { GetCourseRequestHandler } from "@/lib/services/course/Handlers";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = async (props) => {
  const { id } = props.params;
  const course = (await GetCourseRequestHandler(id)).data;

  if (!course) return notFound();

  const { title, description, isDeleted, subject, chapters } = course;

  return (
    <>
      <div className="col-span-12">
        <div className="relative bg-background  p-8 leading-relaxed">
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
              Subject:{" "}
            </span>
            {subject.title}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2.5">
        <Link href={`${id}/update`} className="z-10">
          <UpdateButton />
        </Link>
        {!isDeleted ? (
          <Link href={`${id}/delete`} className="z-10">
            <DeleteButton />
          </Link>
        ) : (
          <Link href={`${id}/restore`} className="z-10">
            <RestoreButton />
          </Link>
        )}
      </div>
    </>
  );
};

export default Page;
