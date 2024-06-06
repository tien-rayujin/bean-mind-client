import { StyButton } from "@/components/Button";
import { Chip } from "@/components/Chips";
import {
  DeleteButton,
  RestoreButton,
  UpdateButton,
} from "@/components/Form/Button";
import { GetUserRequestHandler } from "@/lib/services/user/Handlers";
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
  const user = (await GetUserRequestHandler(id)).data;

  if (!user) return notFound();

  const { userName, email, phoneNumber, roleNames, isDeleted } = user;

  return (
    <>
      <div className="col-span-12">
        <div className="relative bg-background p-8 leading-relaxed">
          <p>
            <span className="font-semibold tracking-wide text-primary">
              Username:{" "}
            </span>
            {userName}
          </p>
          <p>
            <span className="font-semibold tracking-wide text-primary">
              Email:{" "}
            </span>
            {email}
          </p>
          <p>
            <span className="font-semibold tracking-wide text-primary">
              Phone Number:{" "}
            </span>
            {phoneNumber}
          </p>
          <div>
            <span className="font-semibold tracking-wide text-primary">
              Role:{" "}
            </span>
            <div className="flex items-center gap-x-2.5">
              {roleNames &&
                roleNames.map((role) => <Chip key={role} title={role} />)}
            </div>
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
