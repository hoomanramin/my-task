import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home";
import { DrawerProvider } from "./context/DrawerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DrawerProvider>
      <Home />
    </DrawerProvider>
  </React.StrictMode>
);
