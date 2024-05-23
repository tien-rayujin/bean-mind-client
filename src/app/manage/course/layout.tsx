import { PropsWithChildren } from "react";

interface CourseLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<CourseLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
