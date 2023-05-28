import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ConfigProvider } from "antd";
import { QueryClientProvider, QueryClient } from "react-query";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AxiosProvider } from "./context/AxiosContext";
import { UserContextProvider } from "./context/UserContext";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#c5272f",
        },
      }}
    >
      <GoogleOAuthProvider
        clientId={
          "157718577475-f8tb38i74qm61i4qndh9ge2j4vcn7om8.apps.googleusercontent.com"
        }
      >
        <QueryClientProvider client={queryClient}>
          <UserContextProvider>
            <AxiosProvider>
              <App />
            </AxiosProvider>
          </UserContextProvider>
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </ConfigProvider>
  </React.StrictMode>
);

reportWebVitals();
