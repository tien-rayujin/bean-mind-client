import clsx from "clsx";

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
    ? "text-[#9D5425]"
    : status === "success"
      ? "text-[#2F855A]"
      : status === "danger"
        ? "text-[#B45454]"
        : "text-[#004E8A]";

const Chip: React.FC<ChipProps> = (props) => {
  const { title = "chip", type = "info", size = "sm", extras } = props;

  const chipSizeStyle =
    size === "sm" ? "px-2 py-1" : size === "md" ? "px-2.5 py-1.5" : "px-3 py-2";

  return (
    <div
      className={clsx(
        `flex w-30 items-center justify-center rounded-full border`,
        borderStyle(type),
        bgStyle(type),
        chipSizeStyle,
        extras,
      )}
    >
      <span className={clsx(`font-semibold text-text`)}>{title}</span>
    </div>
  );
};

export { Chip };
