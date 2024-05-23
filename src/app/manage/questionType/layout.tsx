import { PropsWithChildren } from "react";

interface QuestionTypeLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<QuestionTypeLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      {modal}
      {children}
    </div>
  );
};

export default Layout;
