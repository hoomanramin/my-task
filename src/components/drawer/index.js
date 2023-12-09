import React from "react";
import Drawer from "@mui/material/Drawer";
import { useDrawer } from "../../context/DrawerContext";
import DrawerHeader from "./DrawerHeader";
import DrawerProfile from "./DrawerProfile";
import AddMember from "./AddMember";
import User from "./User";
export const drawerWidth = "390px";
const SideBar = () => {
  const { isDrawerOpen, toggleDrawer } = useDrawer();

  return (
    <Drawer open={isDrawerOpen} onClose={() => toggleDrawer()} anchor="right">
      <div style={{ width: drawerWidth }}>
        <DrawerHeader />

        <DrawerProfile />
        <AddMember />
        {[
          { image: "/images/team.jpg", name: "Jane", role: "PM" },
          { image: "/images/team.jpg", name: "John", role: "PO" },
        ].map((item, index) => (
          <User
            key={index}
            imageUrl={item.image}
            name={item.name}
            role={item.role}
          />
        ))}
      </div>
    </Drawer>
  );
};

export default SideBar;
