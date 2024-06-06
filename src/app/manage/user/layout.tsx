import { PropsWithChildren } from "react";

interface UserLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<UserLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
