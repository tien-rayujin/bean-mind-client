"use client";

import { Bounce, type TypeOptions, toast } from "react-toastify";

interface ToastProps {
  message?: string;
  type?: TypeOptions;
}

const Toast = (props: ToastProps) => {
  toast(props.message, {
    position: "top-center",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    type: props.type,
  });
};

export { Toast };
