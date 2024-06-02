import { PropsWithChildren } from "react";

interface SessionLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<SessionLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
