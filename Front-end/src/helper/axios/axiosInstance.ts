import { getAccessToken } from "@/utils/auth.service";
import axios, {
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";

const axiosInstance: AxiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `${token}`,
        Accept: "application/json",
      } as AxiosRequestHeaders;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
