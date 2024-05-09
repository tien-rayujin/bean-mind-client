"use client";

import clsx from "clsx";
import { PropsWithChildren } from "react";
import { StyButton } from "./Button";
import { useRouter } from "next/navigation";
import { ActionButton } from "./Form/Button";
import { FaTimes } from "react-icons/fa";

interface ModalProps extends PropsWithChildren {
  extras?: string;
  title?: string;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { extras, title, children } = props;
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  return (
    <div className="bg-modalOverlay absolute bottom-0 left-0 right-0 top-0 z-20 grid h-full w-full place-items-center">
      {/* Modal content */}
      <div
        className={clsx(
          "rounded-xls max-h-[76%] min-w-75 overflow-hidden rounded-xl border border-strokedark bg-background p-8 shadow-md",
          extras,
        )}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-primary">{title}</h2>

          <ActionButton color="text" onClick={handleCloseModal}>
            <FaTimes />
          </ActionButton>
        </div>
        {children}
      </div>
    </div>
  );
};

export { Modal as DefaultModal };
