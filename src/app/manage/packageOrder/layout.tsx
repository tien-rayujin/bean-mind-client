import { PropsWithChildren } from "react";

interface PackageOrderLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<PackageOrderLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
