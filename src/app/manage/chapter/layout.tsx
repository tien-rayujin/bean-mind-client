import { PropsWithChildren } from "react";

interface ChapterLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<ChapterLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
