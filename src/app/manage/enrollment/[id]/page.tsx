import {
  UpdateButton,
  DeleteButton,
  RestoreButton,
} from "@/components/Form/Button";
import { GetEnrollmentRequestHandler } from "@/lib/services/enrollment/Handlers";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = async (props) => {
  const { id } = props.params;
  const enrollment = (await GetEnrollmentRequestHandler(id)).data;

  if (!enrollment) return notFound();

  const { student, lecturer, isDeleted, packageOrder } = enrollment;

  return (
    <>
      <div className="col-span-12">
        <div className="relative bg-background  p-8 leading-relaxed">
          <p>
            <span className="font-semibold tracking-wide text-primary">
              Student:{" "}
            </span>
            {student.appUser.userName}
          </p>
          <p>
            <span className="font-semibold tracking-wide text-primary">
              Lecturer:{" "}
            </span>
            {lecturer.appUser.userName}
          </p>
          <div className="flex items-center justify-start gap-2.5">
            <span className="font-semibold tracking-wide text-primary">
              Status:{" "}
            </span>
            <span>{isDeleted ? "Disabled" : "Enabled"}</span>
          </div>
          <p className="block max-w-[50%]">
            <span className="font-semibold tracking-wide text-primary">
              PackageOrder:{" "}
            </span>
            {packageOrder.id}
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
