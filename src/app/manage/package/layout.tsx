import { PropsWithChildren } from "react";

interface PackageLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<PackageLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
