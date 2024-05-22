import Breadcrumb from "@/components/Breadcrumb";
import { StyButton } from "@/components/Button";
import { GetCourseRequestHandler } from "@/lib/services/course/Handlers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import { FaPen, FaRedo, FaTrash } from "react-icons/fa";

interface CourseDetailLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
  params: { id: string };
}

const Layout: React.FC<CourseDetailLayoutProps> = async (props) => {
  const { children, modal, params } = props;
  const id = params.id;

  const course = (await GetCourseRequestHandler(id)).data;

  if (!course) return notFound();

  const { isDeleted } = course;

  return (
    <div className="relative h-full">
      {modal}

      <div className="flex h-full max-h-full flex-col overflow-y-hidden">
        <Breadcrumb pageName="Course Detail" />

        <div className="mb-4 flex items-center justify-end gap-2.5">
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

        <div className="h-fit max-h-full flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
