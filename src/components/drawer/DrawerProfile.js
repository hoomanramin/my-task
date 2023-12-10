import React from "react";
import { useDrawer } from "../../context/DrawerContext";
import styles from "./DrawerProfile.module.css";

const DrawerProfile = () => {
  const { isAddDrawerOpen } = useDrawer();

  return (
    <div className={styles.profileContainer}>
      <img
        src="/images/team.jpg"
        alt="Profile"
        width={"77px"}
        className={styles.profileImage}
      />
      <span className={styles.teamName}>Team Name</span>
      {!isAddDrawerOpen && <span className={styles.dateInfo}>22 Jan 2023</span>}
    </div>
  );
};

export default DrawerProfile;
