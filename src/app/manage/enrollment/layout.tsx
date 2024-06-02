import { PropsWithChildren } from "react";

interface EnrollmentLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<EnrollmentLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
