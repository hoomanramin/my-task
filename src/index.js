import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home";
import { DrawerProvider } from "./context/DrawerContext";
import { AddMemberProvider } from "./context/MemberContext";
import { UserProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DrawerProvider>
      <AddMemberProvider>
        <UserProvider>
          <Home />
        </UserProvider>
      </AddMemberProvider>
    </DrawerProvider>
  </React.StrictMode>
);
