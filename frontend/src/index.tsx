import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


root.render(
  <React.StrictMode>
    <GoogleOAuthProvider
      clientId={
        "157718577475-f8tb38i74qm61i4qndh9ge2j4vcn7om8.apps.googleusercontent.com"
      }
    >
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
