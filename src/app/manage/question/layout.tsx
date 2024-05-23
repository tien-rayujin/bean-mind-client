import { PropsWithChildren } from "react";

interface QuestionLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<QuestionLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
