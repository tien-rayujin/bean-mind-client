import { PropsWithChildren } from "react";

interface WorksheetLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<WorksheetLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
