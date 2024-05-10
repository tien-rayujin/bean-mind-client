"use client";

import { StyButton } from "@/components/Button";
import { FaFilter } from "react-icons/fa";

interface FilterCourseButtonProps {}

const FilterCourseButton: React.FC<FilterCourseButtonProps> = (props) => {
  return (
    <StyButton extras="h-12 w-12 !bg-secondary/30 hover:!bg-secondary/40">
      <FaFilter />
    </StyButton>
  );
};

export { FilterCourseButton };
