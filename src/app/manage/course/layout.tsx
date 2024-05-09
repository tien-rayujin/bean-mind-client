import Link from "next/link";
import { PropsWithChildren } from "react";
import { CreateCourseButton } from "./components/ActionButton";

interface CourseLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<CourseLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      <Link href={`course/create`} className="z-10">
        <CreateCourseButton />
      </Link>

      {modal}
      {children}
    </div>
  );
};

export default Layout;
