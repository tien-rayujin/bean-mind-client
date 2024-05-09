import Link from "next/link";
import { FaFolder, FaEye } from "react-icons/fa";

interface StyDirectoryItemProps<T> {
  item: T;
}

const StyDirectoryItem: React.FC<StyDirectoryItemProps<Course>> = (props) => {
  const { id, title, description } = props.item;
  return (
    <Link href={`/manage/course/${id}`}>
      <div className="relative flex w-full items-center gap-2.5 rounded-md bg-background/50 p-2.5 transition-all duration-300 hover:scale-105 hover:cursor-pointer">
        <FaFolder strokeWidth={1.25} className="text-primary" />
        <h2 className="font-semibold text-primary">{title}</h2>
        {/* <FaEye className="text-accent" /> */}
        {/* <span className="font-semibold text-accent">/</span> */}
        <FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-accent" />
      </div>
    </Link>
  );
};

export { StyDirectoryItem };
