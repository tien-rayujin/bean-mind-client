import { PropsWithChildren } from "react";

interface WorksheetTemplateLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<WorksheetTemplateLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
