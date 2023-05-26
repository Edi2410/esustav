import React from "react";
import { Layout } from "antd";
import { NavBar, RoutesList } from "components";
export const MainLayout = () => {
  return (
    <Layout style={{ height: "100%", overflow: "auto" }}>
      <Layout.Header
        className="homeHeader"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          boxShadow: "0px 2px 4px #1e293b0d",
        }}
      >
        <NavBar />
      </Layout.Header>
      <RoutesList />
    </Layout>
  );
};
