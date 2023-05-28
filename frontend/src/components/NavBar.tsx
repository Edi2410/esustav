import { Layout, Image, Button } from "antd";
import React from "react";
import { useUserContext } from "hooks";

import eSustavLogo from "../assets/images/eSUSTAVlogo.png";
import "../styles/mainLayout.css";

const layoutStyle: React.CSSProperties = {
  flexDirection: "row",
  backgroundColor: "white",
  width: "100%",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
};

export const NavBar: React.FC = () => {
  const { user } = useUserContext();

  return (
    <Layout style={layoutStyle} className="container">
      <Image src={eSustavLogo} style={{padding: "5px"}} height={"100%"} preview={false} />
      <Button className="profileButton">
        <Image
          style={{ borderRadius: "15%" }}
          src={user?.user?.photo}
          width={24}
          preview={false}
        />
        {user?.user?.first_name} {user?.user?.last_name}
      </Button>
    </Layout>
  );
};
