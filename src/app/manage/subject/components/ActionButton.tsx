import { FaFilter, FaPlus } from "react-icons/fa";

interface CreateSubjectButtonProps {}

const CreateSubjectButton: React.FC<CreateSubjectButtonProps> = (props) => {
  return (
    <button className="absolute bottom-0 right-0 z-10 grid h-12 w-12 place-items-center rounded-full bg-primary/80 text-text hover:bg-primary">
      <FaPlus />
    </button>
  );
};

interface FilterSubjectButtonProps {}

const FilterSubjectButton: React.FC<FilterSubjectButtonProps> = (props) => {
  return (
    <button className="grid h-12 w-12 place-items-center rounded-md bg-secondary/30 text-text hover:bg-secondary/40">
      <FaFilter />
    </button>
  );
};

export { CreateSubjectButton, FilterSubjectButton };
