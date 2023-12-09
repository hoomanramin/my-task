import React from "react";
import { IconButton, Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useDrawer } from "../../context/DrawerContext";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const DrawerHeader = () => {
  const { toggleDrawer, toggleAddDrawer, isAddDrawerOpen } = useDrawer();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 32px",
      }}
    >
      {!isAddDrawerOpen ? (
        <IconButton onClick={() => toggleDrawer()}>
          <ChevronLeftIcon />
        </IconButton>
      ) : (
        <Button
          onClick={() => toggleAddDrawer()}
          sx={{
            fontSize: 14,
            color: "#7B93AF",
            fontWeight: 500,
            textTransform: "capitalize",
          }}
        >
          Cancel
        </Button>
      )}
      {isAddDrawerOpen ? (
        <Button
          onClick={() => toggleAddDrawer()}
          sx={{
            fontSize: 14,
            color: "linear-gradient(92deg, #32A6AE -6.8%, #00BBA7 100.34%))",
            fontWeight: 500,
            textTransform: "capitalize",
          }}
        >
          Create Team
        </Button>
      ) : (
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      )}
    </div>
  );
};

export default DrawerHeader;
