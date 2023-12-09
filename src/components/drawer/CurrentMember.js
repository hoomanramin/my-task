import React from "react";
import styles from "./CurrentMember.module.css";

const CurrentMember = ({ imageUrl, name }) => {
  return (
    <div className={styles.currentMemberContainer}>
      <img src={imageUrl} alt="user" className={styles.userImage} />
      <span className={styles.userName}>{name}</span>
    </div>
  );
};

export default CurrentMember;
