import clsx from "clsx";
import { FaCircle, FaDotCircle } from "react-icons/fa";

interface ChipProps {
  title?: string;
  type?: "info" | "warning" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  extras?: string;
}

const borderStyle = (status: "warning" | "success" | "info" | "danger") =>
  status === "warning"
    ? "border-[#FBBF24]"
    : status === "success"
      ? "border-[#34D399]"
      : status === "danger"
        ? "border-[#F87171]"
        : "border-[#007BFF]";

const bgStyle = (status: "warning" | "success" | "info" | "danger") =>
  status === "warning"
    ? "bg-[#FBBF24]"
    : status === "success"
      ? "bg-[#34D399]"
      : status === "danger"
        ? "bg-[#F87171]"
        : "bg-[#007BFF]";

const titleTextStyle = (status: "warning" | "success" | "info" | "danger") =>
  status === "warning"
    ? "text-[#FBBF24]"
    : status === "success"
      ? "text-[#34D399]"
      : status === "danger"
        ? "text-[#F87171]"
        : "text-[#007BFF]";

const Chip: React.FC<ChipProps> = (props) => {
  const { title = "chip", type = "info", size = "sm", extras } = props;

  const chipSizeStyle =
    size === "sm" ? "px-2 py-1" : size === "md" ? "px-2.5 py-1.5" : "px-3 py-2";

  return (
    <div
      className={clsx(
        `flex w-fit items-center justify-center rounded-md border bg-opacity-10`,
        borderStyle(type),
        bgStyle(type),
        chipSizeStyle,
        extras,
      )}
    >
      <FaCircle size={10} className={clsx(titleTextStyle(type))} />
      <span className={clsx(`ml-2.5`, titleTextStyle(type))}>{title}</span>
    </div>
  );
};

export { Chip };
