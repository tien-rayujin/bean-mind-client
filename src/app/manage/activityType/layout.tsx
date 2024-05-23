import { PropsWithChildren } from "react";

interface ActivityTypeLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<ActivityTypeLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
