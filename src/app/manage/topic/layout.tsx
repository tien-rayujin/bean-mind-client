import { PropsWithChildren } from "react";

interface TopicLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<TopicLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
