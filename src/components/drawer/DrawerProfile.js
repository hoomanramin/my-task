import React from "react";
import { useDrawer } from "../../context/DrawerContext";

const DrawerProfile = () => {
  const { isAddDrawerOpen } = useDrawer();
  return (
    <div
      style={{
        display: "flex",
        padding: "0 32px",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <img
        src="/images/team.jpg"
        alt="Profile"
        width={"77px"}
        style={{
          padding: "6px",
          border: "1px solid #FFB97B",
          borderRadius: "50%",
        }}
      />
      <span style={{ fontWeight: 600, fontSize: "20px", color: "#474E55" }}>
        Team Name
      </span>
      {!isAddDrawerOpen && (
        <span style={{ fontSize: 14, color: "#425B76" }}>22 jan 2023</span>
      )}
    </div>
  );
};

export default DrawerProfile;
