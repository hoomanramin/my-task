import React from "react";
import { IconButton, Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useDrawer } from "../../context/DrawerContext";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./DrawerHeader.module.css";

const DrawerHeader = () => {
  const { toggleDrawer, toggleAddDrawer, isAddDrawerOpen } = useDrawer();

  return (
    <div className={styles.headerContainer}>
      {!isAddDrawerOpen ? (
        <IconButton onClick={() => toggleDrawer()}>
          <ChevronLeftIcon />
        </IconButton>
      ) : (
        <Button
          onClick={() => toggleAddDrawer()}
          className={styles.cancelButton}
        >
          Cancel
        </Button>
      )}
      {isAddDrawerOpen ? (
        <Button
          onClick={() => toggleAddDrawer()}
          className={styles.createTeamButton}
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
