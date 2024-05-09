import Link from "next/link";
import { PropsWithChildren } from "react";
import { CreateChapterButton } from "./components/ActionButton";

interface ChapterLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<ChapterLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      <Link href={`chapter/create`} className="z-10">
        <CreateChapterButton />
      </Link>

      {modal}
      {children}
    </div>
  );
};

export default Layout;
