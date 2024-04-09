import { toast } from "vue3-toastify";

export const toastSuccess = (message: string, autoClose = 1500) => {
  toast(message, { type: "success", autoClose });
};
export const toastError = (message: string, autoClose = 1500) => {
  toast(message, { type: "error", autoClose });
};
export const toastWarning = (message: string, autoClose = 1500) => {
  toast(message, { type: "warning", autoClose });
};
