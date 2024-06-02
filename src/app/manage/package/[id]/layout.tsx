import Breadcrumb from "@/components/Breadcrumb";
import { PropsWithChildren } from "react";

interface PackageDetailLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<PackageDetailLayoutProps> = async (props) => {
  const { children, modal } = props;
  return (
    <div className="relative h-full">
      {modal}

      <div className="flex h-full max-h-full flex-col overflow-y-hidden">
        <Breadcrumb pageName="Package Detail" />

        <div className="h-fit max-h-full flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
