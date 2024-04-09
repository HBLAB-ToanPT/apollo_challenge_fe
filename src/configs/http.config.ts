import axios from "axios";
import { toastError } from "../utils/toastify.util";
import { AxiosResponse } from "axios";

const { ENV_API_BASE_URL } = import.meta.env;

const httpRequest = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  baseURL: ENV_API_BASE_URL,
});

httpRequest.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (err) => {
    const message =
      err.response?.data?.detail ||
      err.response?.data?.errorMessage ||
      err.message ||
      "Something went wrong";
    toastError(message);
    return Promise.reject(err);
  }
);

export default httpRequest;
