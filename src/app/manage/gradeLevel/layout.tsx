import { PropsWithChildren } from "react";

interface GradeLevelLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<GradeLevelLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
