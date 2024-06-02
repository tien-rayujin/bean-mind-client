import { PropsWithChildren } from "react";

interface TeachingSlotLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<TeachingSlotLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
