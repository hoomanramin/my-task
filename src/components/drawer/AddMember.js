import React from "react";
import IconButton from "@mui/material/IconButton";
import { useDrawer } from "../../context/DrawerContext";
const AddMember = () => {
  const { toggleAddDrawer } = useDrawer();
  return (
    <div
      style={{
        display: "flex",
        padding: "20px 32px",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#F1F1F1",
        margin: "24px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img src="/images/users.png" alt="usericon" width={"24px"} />
        <span>6 member</span>
      </div>
      <IconButton onClick={() => toggleAddDrawer()}>
        <img src="/images/adduser.png" alt="adduser" width={"24px"} />
      </IconButton>
    </div>
  );
};

export default AddMember;
