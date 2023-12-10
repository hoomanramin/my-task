import React from "react";
import SideBar from "../drawer/MainDrawer";
import AddSideBar from "../drawer/AddSidebar";

const MainLayout = ({ children }) => {
  return (
    <>
      <SideBar />
      <AddSideBar />
      {children}
    </>
  );
};

export default MainLayout;
