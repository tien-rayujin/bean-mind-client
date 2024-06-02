import { PropsWithChildren } from "react";

interface SlotLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<SlotLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
