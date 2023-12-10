import React from "react";
import Drawer from "@mui/material/Drawer";
import { useDrawer } from "../../context/DrawerContext";
import DrawerHeader from "./DrawerHeader";
import DrawerProfile from "./DrawerProfile";
import AddMember from "./AddMember";
import User from "./User";
import { useAddMember } from "../../context/MemberContext";
export const drawerWidth = "390px";
const SideBar = () => {
  const { isDrawerOpen, toggleDrawer } = useDrawer();
  const { currentMember } = useAddMember();
  return (
    <Drawer open={isDrawerOpen} onClose={() => toggleDrawer()} anchor="right">
      <div style={{ width: drawerWidth }}>
        <DrawerHeader />
        <DrawerProfile />
        <AddMember />
        {currentMember.map((item, index) => (
          <User
            key={index}
            imageUrl={item.image}
            name={item.name}
            username={item.username}
          />
        ))}
      </div>
    </Drawer>
  );
};

export default SideBar;
