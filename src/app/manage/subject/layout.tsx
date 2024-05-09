import Link from "next/link";
import { PropsWithChildren } from "react";
import { CreateSubjectButton } from "./components/ActionButton";

interface SubjectLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<SubjectLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      <Link href={`subject/create`} className="z-10">
        <CreateSubjectButton />
      </Link>

      {modal}
      {children}
    </div>
  );
};

export default Layout;
