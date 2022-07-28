import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <p style={{ color: "#fff" }}>Footer</p>
    </div>
  );
};

export default Layout;
