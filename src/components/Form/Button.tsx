"use client";

import { useFormStatus } from "react-dom";
import { StyButton } from "../Button";
import clsx from "clsx";
import Loader from "../Loader";
import React from "react";
import {
  FaEye,
  FaFilter,
  FaPen,
  FaPlus,
  FaRedo,
  FaSync,
  FaTrash,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

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

interface ActionButtonProp
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color: string;
  extras?: string;
}

const ActionButton: React.FC<ActionButtonProp> = (props) => {
  const { children, color, extras, ...rest } = props;
  return (
    <button
      {...rest}
      className={clsx(
        "grid h-8 w-8 place-items-center rounded-md border-stroke bg-background",
        `text-${color} duration-500 ease-in-out hover:-translate-y-1`,
        extras,
      )}
    >
      {children}
    </button>
  );
};

interface ViewDetailButtonProps {}

const ViewDetailButton: React.FC<ViewDetailButtonProps> = (props) => {
  return (
    <StyButton extras="!text-white shadow-sm hover:!-translate-y-0">
      <FaEye />
    </StyButton>
  );
};

interface CreateButtonProps {
  text?: string;
  extras?: string;
  isIconOnly?: boolean;
  isSolid?: boolean;
}

const CreateButton: React.FC<CreateButtonProps> = (props) => {
  const { text = "Create", isIconOnly, extras, isSolid = true } = props;
  return (
    <StyButton
      extras={clsx(
        "w-fit !text-white shadow-sm hover:!-translate-y-0",
        "hover:bg-opacity-80",
        isIconOnly ? "" : "flex items-center justify-center gap-x-2",
        isSolid
          ? "!bg-success"
          : "border border-success !bg-white !text-success",
        extras,
      )}
    >
      <FaPlus />
      {text && !isIconOnly && <p>{text}</p>}
    </StyButton>
  );
};

interface UpdateButtonProps {
  text?: string;
  extras?: string;
  isIconOnly?: boolean;
  isSolid?: boolean;
}

const UpdateButton: React.FC<UpdateButtonProps> = (props) => {
  const { text = "Update", extras, isIconOnly, isSolid = true } = props;
  return (
    <StyButton
      extras={clsx(
        "w-fit !text-white shadow-sm hover:!-translate-y-0",
        "hover:bg-opacity-80",
        isIconOnly ? "" : "flex items-center justify-center gap-x-2",
        isSolid
          ? "!bg-warning"
          : "border border-success !bg-white !text-success",
        extras,
      )}
    >
      <FaPen />
      {text && !isIconOnly && <p>{text}</p>}
    </StyButton>
  );
};

interface DeleteButtonProps {
  text?: string;
  extras?: string;
  isIconOnly?: boolean;
  isSolid?: boolean;
}

const DeleteButton: React.FC<DeleteButtonProps> = (props) => {
  const { text = "Delete", extras, isIconOnly, isSolid = true } = props;
  return (
    <StyButton
      extras={clsx(
        "w-fit !text-white shadow-sm hover:!-translate-y-0",
        "hover:bg-opacity-80",
        isIconOnly ? "" : "flex items-center justify-center gap-x-2",
        isSolid
          ? "!bg-danger"
          : "border border-success !bg-white !text-success",
        extras,
      )}
    >
      <FaTrash />
      {text && !isIconOnly && <p>{text}</p>}
    </StyButton>
  );
};

interface RestoreButtonProps {
  text?: string;
  extras?: string;
  isIconOnly?: boolean;
  isSolid?: boolean;
}

const RestoreButton: React.FC<RestoreButtonProps> = (props) => {
  const { text = "Restore", extras, isIconOnly, isSolid = true } = props;
  return (
    <StyButton
      extras={clsx(
        "w-fit !text-white shadow-sm hover:!-translate-y-0",
        "hover:bg-opacity-80",
        isIconOnly ? "" : "flex items-center justify-center gap-x-2",
        isSolid
          ? "!bg-accent"
          : "border border-success !bg-white !text-success",
        extras,
      )}
    >
      <FaRedo />
      {text && !isIconOnly && <p>{text}</p>}
    </StyButton>
  );
};

interface FilterButtonProps {}

const FilterButton: React.FC<FilterButtonProps> = (props) => {
  return (
    <StyButton extras="h-12 w-12 shadow-sm !bg-primary hover:!bg-opacity-80 !text-white hover:!-translate-y-0">
      <FaFilter />
    </StyButton>
  );
};

interface ReloadButtonProps {}

const ReloadButton: React.FC<ReloadButtonProps> = (props) => {
  const router = useRouter();

  return (
    <StyButton
      onClick={() => router.refresh()}
      extras="h-12 w-12 shadow-sm !bg-secondary !text-white hover:!-translate-y-0"
    >
      <FaSync />
    </StyButton>
  );
};

export {
  SubmitButton,
  ActionButton,
  ViewDetailButton,
  CreateButton,
  UpdateButton,
  DeleteButton,
  RestoreButton,
  FilterButton,
  ReloadButton,
};
