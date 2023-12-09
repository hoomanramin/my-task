import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useDrawer } from "../../context/DrawerContext";

const SideBar = () => {
  const { isDrawerOpen, toggleDrawer } = useDrawer();

  return (
    <Drawer open={isDrawerOpen} onClose={() => toggleDrawer()} anchor="right">
      <div>
        <IconButton onClick={() => toggleDrawer()}>
          <ChevronLeftIcon />
        </IconButton>

        <p>This is the drawer content.</p>
      </div>
    </Drawer>
  );
};

export default SideBar;
