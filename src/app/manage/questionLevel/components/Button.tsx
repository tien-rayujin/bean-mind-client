"use client";

import { StyButton } from "@/components/Button";
import { FaFilter } from "react-icons/fa";

interface FilterQuestionLevelButtonProps {}

const FilterQuestionLevelButton: React.FC<FilterQuestionLevelButtonProps> = (
  props,
) => {
  return (
    <StyButton extras="h-12 w-12 !bg-secondary/30 hover:!bg-secondary/40">
      <FaFilter />
    </StyButton>
  );
};

export { FilterQuestionLevelButton };
