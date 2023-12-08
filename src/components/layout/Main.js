import React from "react";
import SideBar from "../drawer";

const MainLayout = ({ children }) => {
  return (
    <>
      {children}
      <SideBar />
    </>
  );
};

export default MainLayout;
