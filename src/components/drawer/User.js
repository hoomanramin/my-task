import React from "react";
import styles from "./User.module.css";

const User = ({ imageUrl, name, role }) => {
  return (
    <div className={styles.userContainer}>
      <img src={imageUrl} alt="user" className={styles.userImage} />
      <div className={styles.userInfoContainer}>
        <span className={styles.userName}>{name}</span>
        <span className={styles.userRole}>{role}</span>
      </div>
    </div>
  );
};

export default User;
