import Axios, { AxiosInstance } from "axios";
import { createContext, createElement, useMemo } from "react";

export const AxiosContext = createContext<AxiosInstance>(Axios);

export const AxiosProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const auth = useMemo(() => {
    const axios = Axios.create({ baseURL: "http://127.0.0.1:8000/api/" });
    let tokenData: string | null = sessionStorage.getItem("accessToken");

    axios.interceptors.request.use((config) => {
      if (tokenData) {
        config.headers.Authorization = `Bearer ${tokenData}`;
      }

      return config;
    }); // Add response interceptor

    axios.interceptors.response.use(
      (response) => {
        return response;
      },

      (error) => {
        if (error.response?.status === 401) {
          console.log(error);
        }
      }
    );

    return axios;
  }, []);

  return createElement(AxiosContext.Provider, { value: auth }, children);
};
