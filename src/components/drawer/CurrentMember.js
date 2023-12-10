import React, { useState } from "react";
import styles from "./CurrentMember.module.css";
import { useAddMember } from "../../context/MemberContext";
import CloseIcon from "@mui/icons-material/Close";
const CurrentMember = ({ name, id }) => {
  const { removeMemberHandler } = useAddMember();
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  const handleRemoveMember = () => {
    const memberToRemove = {
      id,
    };
    removeMemberHandler(memberToRemove);
  };

  return (
    <div
      className={styles.currentMemberContainer}
      onClick={handleRemoveMember}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {isHovered ? (
        <CloseIcon sx={{ ml: "8px" }} />
      ) : (
        <img src={"/images/team.jpg"} alt="user" className={styles.userImage} />
      )}

      <span className={styles.userName}>{name}</span>
    </div>
  );
};

export default CurrentMember;
