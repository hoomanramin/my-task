import React from "react";
import SideBar from "../drawer";

const MainLayout = ({ children }) => {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
};

export default MainLayout;
