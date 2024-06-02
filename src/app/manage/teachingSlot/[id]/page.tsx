import {
  UpdateButton,
  DeleteButton,
  RestoreButton,
} from "@/components/Form/Button";
import { GetTeachingSlotRequestHandler } from "@/lib/services/teachingSlot/Handlers";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = async (props) => {
  const { id } = props.params;
  const teachingSlot = (await GetTeachingSlotRequestHandler(id)).data;

  if (!teachingSlot) return notFound();

  const { date, lecturer, gradeLevel, sessions, isDeleted, slot } =
    teachingSlot;

  return (
    <>
      <div className="col-span-12">
        <div className="relative bg-background  p-8 leading-relaxed">
          <p>
            <span className="font-semibold tracking-wide text-primary">
              Date:{" "}
            </span>
            {date.toDateString()}
          </p>
          <p>
            <span className="font-semibold tracking-wide text-primary">
              Lecturer:{" "}
            </span>
            {lecturer.appUser.userName}
          </p>
          <p>
            <span className="font-semibold tracking-wide text-primary">
              Grade Level:{" "}
            </span>
            {gradeLevel.name}
          </p>
          <div className="flex items-center justify-start gap-2.5">
            <span className="font-semibold tracking-wide text-primary">
              Status:{" "}
            </span>
            <span>{isDeleted ? "Disabled" : "Enabled"}</span>
          </div>
          <p className="block max-w-[50%]">
            <span className="font-semibold tracking-wide text-primary">
              Slot:{" "}
            </span>
            {slot.id}
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
