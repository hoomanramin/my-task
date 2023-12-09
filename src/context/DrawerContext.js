import React, { createContext, useContext, useState } from "react";

const DrawerContext = createContext();

const DrawerProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(prevIsOpen => !prevIsOpen);
  };

  const toggleAddDrawer = () => {
    setIsAddDrawerOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <DrawerContext.Provider
      value={{ isDrawerOpen, toggleDrawer, toggleAddDrawer, isAddDrawerOpen }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};

export { DrawerProvider, useDrawer };
