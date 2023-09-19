// ToastWrapper.ts
import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastConfig extends ToastOptions {
  autoClose?: number;
}

export const Toast = {
  success: (msg: string, config: ToastConfig = {}): void => {
    toast.success(msg, { ...config });
  },
  error: (msg: string, config: ToastConfig = {}): void => {
    toast.error(msg, { ...config });
  },
  info: (msg: string, config: ToastConfig = {}): void => {
    toast.info(msg, { ...config });
  },
  warn: (msg: string, config: ToastConfig = {}): void => {
    toast.warn(msg, { ...config });
  },
};
