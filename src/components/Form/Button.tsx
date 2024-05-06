"use client";

import { useFormStatus } from "react-dom";
import { StyButton } from "../Button";
import clsx from "clsx";
import Loader from "../Loader";

interface SubmitButtonProp {
  title: string;
  extras?: string;
}

const SubmitButton: React.FC<SubmitButtonProp> = (props) => {
  const { pending } = useFormStatus();
  return (
    <StyButton
      extras={clsx(
        "mt-4 flex w-full items-center justify-center tracking-wide",
        props.extras,
      )}
      disabled={pending}
      type="submit"
    >
      {pending ? <Loader /> : props.title}
    </StyButton>
  );
};

interface ActionButtonProp {
  icon?: React.ReactNode;
  color: string;
}

const ActionButton: React.FC<ActionButtonProp> = (props) => {
  const { icon, color } = props;
  return (
    <button
      className={clsx(
        "grid h-8 w-8 place-items-center rounded-md border-strokedark bg-background",
        `text-${color} duration-500 ease-in-out hover:-translate-y-1`,
      )}
    >
      {icon}
    </button>
  );
};
export { SubmitButton, ActionButton };
