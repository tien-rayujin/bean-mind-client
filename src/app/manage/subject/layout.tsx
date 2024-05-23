import { PropsWithChildren } from "react";

interface SubjectLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<SubjectLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
