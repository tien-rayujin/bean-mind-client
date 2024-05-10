import { StyButton } from "@/components/Button";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { FaPlus } from "react-icons/fa";

interface QuestionTypeLayoutProps extends PropsWithChildren {
  modal: React.ReactNode;
}

const Layout: React.FC<QuestionTypeLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <div className="relative h-full">
      <Link href={`questionType/create`}>
        <StyButton extras="absolute bottom-0 right-0 rounded-full w-12 h-12 z-10">
          <FaPlus />
        </StyButton>
      </Link>

      {modal}
      {children}
    </div>
  );
};

export default Layout;
