import clsx from "clsx";
import { AiFillWarning } from "react-icons/ai";
import { FaCheck, FaTimes } from "react-icons/fa";

interface AlertProps {
  title: string;
  message: string;
  status: "success" | "warning" | "danger";
}

const Alert = ({ title, message, status }: AlertProps) => {
  const borderStyle =
    status === "warning"
      ? "border-warning"
      : status === "success"
        ? "border-[#34D399]"
        : "border-[#F87171]";

  const bgStyle =
    status === "warning"
      ? "bg-warning bg-opacity-30"
      : status === "success"
        ? "bg-[#34D399]"
        : "bg-[#F87171]";

  const titleTextStyle =
    status === "warning"
      ? "text-[#9D5425]"
      : status === "success"
        ? "text-[#34D399]"
        : "text-[#B45454]";

  const messageTextStyle =
    status === "warning"
      ? "text-[#D0915C]"
      : status === "success"
        ? "text-body"
        : "text-[#CD5D5D]";

  const icon =
    status === "warning" ? (
      <AiFillWarning />
    ) : status === "success" ? (
      <FaCheck />
    ) : (
      <FaTimes />
    );

  return (
    <div
      className={clsx(
        "border-l-6 flex w-full bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9",
        borderStyle,
        bgStyle,
      )}
    >
      <div
        className={clsx(
          "mr-5 flex h-9 w-9 max-w-[36px] items-center justify-center rounded-lg",
          bgStyle,
        )}
      >
        {icon}
      </div>
      <div className="w-full">
        <h5 className={clsx("mb-3 text-lg font-semibold", titleTextStyle)}>
          {title}
        </h5>
        <p className={clsx("leading-relaxed", messageTextStyle)}>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
