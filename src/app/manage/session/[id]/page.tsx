import {
  UpdateButton,
  DeleteButton,
  RestoreButton,
} from "@/components/Form/Button";
import { GetSessionRequestHandler } from "@/lib/services/session/Handlers";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = async (props) => {
  const { id } = props.params;
  const session = (await GetSessionRequestHandler(id)).data;

  if (!session) return notFound();

  const { enrollment, lecturer, isDeleted, teachingSlot } = session;

  return (
    <>
      <div className="col-span-12">
        <div className="relative bg-background  p-8 leading-relaxed">
          <p>
            <span className="font-semibold tracking-wide text-primary">
              Enrollment:{" "}
            </span>
            {enrollment.id}
          </p>
          <p>
            <span className="font-semibold tracking-wide text-primary">
              Lecturer:{" "}
            </span>
            {lecturer.appUser.userName}
          </p>
          <p>
            <span className="font-semibold tracking-wide text-primary">
              Teaching Slot :{" "}
            </span>
            {teachingSlot.date.toDateString()}
          </p>
          <div className="flex items-center justify-start gap-2.5">
            <span className="font-semibold tracking-wide text-primary">
              Status:{" "}
            </span>
            <span>{isDeleted ? "Disabled" : "Enabled"}</span>
          </div>
          <p className="block max-w-[50%]">
            <span className="font-semibold tracking-wide text-primary">
              TeachingSlot:{" "}
            </span>
            {teachingSlot.id}
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
