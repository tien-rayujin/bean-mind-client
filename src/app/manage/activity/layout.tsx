import { PropsWithChildren } from "react";

interface ActivityLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<ActivityLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
