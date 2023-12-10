import React from "react";
import IconButton from "@mui/material/IconButton";
import { useDrawer } from "../../context/DrawerContext";
import styles from "./AddMember.module.css";
import { useAddMember } from "../../context/MemberContext";

const AddMember = () => {
  const { toggleAddDrawer } = useDrawer();
  const { currentMember } = useAddMember();
  return (
    <div className={styles.addMemberContainer}>
      <div className={styles.memberInfo}>
        <img
          src="/images/users.png"
          alt="usericon"
          className={styles.userIcon}
        />
        <span className={styles.memberCount}>
          {currentMember.length} Members
        </span>
      </div>
      <IconButton onClick={() => toggleAddDrawer()}>
        <img src="/images/adduser.png" alt="adduser" width={"24px"} />
      </IconButton>
    </div>
  );
};

export default AddMember;
