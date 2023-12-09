import React from "react";
import Drawer from "@mui/material/Drawer";
import { useDrawer } from "../../context/DrawerContext";
import DrawerHeader from "./DrawerHeader";
import DrawerProfile from "./DrawerProfile";
import CurrentMember from "./CurrentMember";
import styles from "./AddSideBar.module.css";

export const drawerWidth = "390px";

const AddSideBar = () => {
  const { isAddDrawerOpen, toggleAddDrawer } = useDrawer();

  const onChangeHandler = e => {
    console.log(e.target.value);
  };

  return (
    <Drawer
      open={isAddDrawerOpen}
      onClose={() => toggleAddDrawer()}
      anchor="right"
    >
      <div style={{ width: drawerWidth }}>
        <DrawerHeader />
        <DrawerProfile />
        <div className={styles.contentWrapper}>
          <span className={styles.sectionTitle}>Add Members </span>
          <span className={styles.memberCount}>6/200</span>
        </div>
        <div className={styles.membersContainer}>
          {[
            { image: "/images/team.jpg", name: "Jane", role: "PM" },
            { image: "/images/team.jpg", name: "John", role: "PO" },
            {
              image: "/images/team.jpg",
              name: "Johnsddsfsdfsdfdsfsdf",
              role: "PO",
            },
            { image: "/images/team.jpg", name: "John", role: "PO" },
          ].map((item, index) => (
            <CurrentMember key={index} imageUrl={item.image} name={item.name} />
          ))}
          <input onChange={e => onChangeHandler(e)} />
        </div>
      </div>
    </Drawer>
  );
};

export default AddSideBar;
