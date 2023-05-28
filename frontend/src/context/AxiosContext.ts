import Axios, { AxiosInstance } from "axios";
import { createContext, createElement, useMemo } from "react";
import Cookies from "js-cookie";

export const AxiosContext = createContext<AxiosInstance>(Axios);

export const AxiosProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const auth = useMemo(() => {
    const axios = Axios.create({ baseURL: "http://localhost:8000/api/" });
    let tokenData: string | null = sessionStorage.getItem("accessToken");

    axios.interceptors.request.use(async (config) => {
      if (tokenData) {
        config.headers.Authorization = `Bearer ${tokenData}`;
      }

      const response = await axios.get("/get-csrf-token/");

      const csrfToken = response.data.csrfToken;
      console.log(csrfToken);
      if (csrfToken) {
        // Pohranjivanje CSRF tokena u kolačić
        Cookies.set("csrftoken", csrfToken, { sameSite: "strict" });
        config.headers["X-CSRFToken"] = csrfToken;
      }

      return config;
    }); // Add response interceptor

    axios.interceptors.response.use(
      (response) => {
        const csrfToken = response.headers["x-csrftoken"];
        if (csrfToken) {
          // Ažuriranje CSRF tokena u kolačiću
          Cookies.set("csrftoken", csrfToken, { sameSite: "strict" });
        }
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
