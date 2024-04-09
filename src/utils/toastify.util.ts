import { useToast } from "vue-toast-notification";
const $toast = useToast();

export const toastSuccess = (message: string) => {
  $toast.success(message);
};
export const toastError = (message: string) => {
  $toast.error(message);
};
export const toastWarning = (message: string) => {
  $toast.warning(message);
};
