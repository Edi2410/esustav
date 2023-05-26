import React, { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useUserContext, useGetUserData } from "hooks";
import eSustavLogo from "../assets/images/eSUSTAVlogo.png";
import { Image } from "antd";

import "../styles/loginPage.css";

export const LoginPage = () => {
  const { setUser } = useUserContext();
  const { data: userData } = useGetUserData();

  useEffect(() => {
    setUser(userData);
  }, [userData, setUser]);

  const responseGoogleSuccess = async (response: any) => {
    sessionStorage.setItem("accessToken", response.credential);
    window.location.reload();
  };
  return (
    <div className="login">
      <div className="containerLogin">
        <Image
          className="logo"
          preview={false}
          width={"70%"}
          src={eSustavLogo}
        />
        <GoogleLogin onSuccess={responseGoogleSuccess} />
      </div>
    </div>
  );
};
