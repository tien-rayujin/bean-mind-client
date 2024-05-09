import Link from "next/link";
import { FaPlus } from "react-icons/fa";

interface CreateSubjectButtonProps {}

const CreateSubjectButton: React.FC<CreateSubjectButtonProps> = (props) => {
  return (
    <Link href="/manage/subject/create">
      <button className="absolute bottom-0 right-0 grid h-12 w-12 place-items-center rounded-full bg-primary text-text">
        <FaPlus />
      </button>
    </Link>
  );
};

export { CreateSubjectButton };
