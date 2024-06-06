import { StyButton } from "@/components/Button";
import {
  DeleteButton,
  RestoreButton,
  UpdateButton,
} from "@/components/Form/Button";
import { GetSlotRequestHandler } from "@/lib/services/slot/Handlers";
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
  const slot = (await GetSlotRequestHandler(id)).data;

  if (!slot) return notFound();

  const { startTime, endTime, isDeleted, teachingSlots } = slot;

  return (
    <>
      <div className="col-span-12">
        <div className="relative bg-background p-8 leading-relaxed">
          <p>
            <span className="font-semibold tracking-wide text-primary">
              Start Time:{" "}
            </span>
            {startTime}
          </p>
          <p>
            <span className="font-semibold tracking-wide text-primary">
              End Time:{" "}
            </span>
            {endTime}
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
