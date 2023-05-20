import React from "react";
import { GoogleLogin } from "@react-oauth/google";

export const LoginPage = () => {
  const responseMessage = (response:any) => {
    console.log(response);
  };
  const errorMessage = () => {
    console.log();
  };
  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
};
