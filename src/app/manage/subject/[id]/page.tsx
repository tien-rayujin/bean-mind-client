import { StyButton } from "@/components/Button";
import { GetSubjectRequestHandler } from "@/lib/services/subject/Handlers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaPen, FaTrash, FaRedo } from "react-icons/fa";

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
    <>
      <div className="col-span-12">
        <div className="relative bg-background p-8 leading-relaxed">
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
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2.5">
        <Link href={`${id}/update`} className="z-10">
          <StyButton extras="flex items-center gap-2">
            <FaPen />
            <span>Edit</span>
          </StyButton>
        </Link>
        {!isDeleted ? (
          <Link href={`${id}/delete`} className="z-10">
            <StyButton extras="flex items-center gap-2 !bg-accent">
              <FaTrash />
              <span>Delete</span>
            </StyButton>
          </Link>
        ) : (
          <Link href={`${id}/restore`} className="z-10">
            <StyButton extras="flex items-center gap-2 !bg-accent">
              <FaRedo />
              <span>Restore</span>
            </StyButton>
          </Link>
        )}
      </div>
    </>
  );
};

export default Page;
