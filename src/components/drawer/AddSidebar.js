import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { useDrawer } from "../../context/DrawerContext";
import DrawerHeader from "./DrawerHeader";
import DrawerProfile from "./DrawerProfile";
import CurrentMember from "./CurrentMember";
import styles from "./AddSideBar.module.css";
import User from "./User";
import { useAddMember } from "../../context/MemberContext";
import { useUser } from "../../context/UserContext";

export const drawerWidth = "390px";

const AddSideBar = () => {
  const { isAddDrawerOpen, toggleAddDrawer } = useDrawer();
  const { currentMember } = useAddMember();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { searchTerm, onChangeHandler, users } = useUser();

  useEffect(() => {
    const filtered = users.filter(
      user =>
        !currentMember.some(member => member.id === user.id) &&
        (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.username.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users, currentMember, setFilteredUsers]);

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
          <span className={styles.memberCount}>
            {currentMember.length}/{users.length}
          </span>
        </div>
        <div className={styles.membersContainer}>
          {currentMember.map(item => (
            <CurrentMember
              key={item.id}
              imageUrl={item.image}
              name={item.name}
              id={item.id}
            />
          ))}
          <input
            onChange={e => onChangeHandler(e)}
            className={styles.customInput}
            value={searchTerm}
            placeholder="Search users..."
          />
        </div>
        <div style={{ marginTop: "16px" }}>
          {filteredUsers.map(item => (
            <User
              key={item.id}
              id={item.id}
              name={item.name}
              username={item.username}
            />
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default AddSideBar;
