import React from "react";
import styles from "./User.module.css";
import { useAddMember } from "../../context/MemberContext";
import { useDrawer } from "../../context/DrawerContext";

const User = ({ name, username, id }) => {
  const { addMemberHandler } = useAddMember();
  const { isAddDrawerOpen } = useDrawer();

  const handleAddMember = () => {
    const newUser = {
      id,
      name,
      username,
    };

    addMemberHandler(newUser);
  };
  return (
    <div
      className={styles.userContainer}
      onClick={isAddDrawerOpen ? handleAddMember : null}
    >
      <img
        src={"/images/useravatar.png"}
        alt="user"
        className={styles.userImage}
      />
      <div className={styles.userInfoContainer}>
        <span className={styles.userName}>{name}</span>
        <span className={styles.userusername}>{username}</span>
      </div>
    </div>
  );
};

export default User;
