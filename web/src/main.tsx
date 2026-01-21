console.log("⚡ REACT ENTRY POINT LOADED ⚡");
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("react-overlay");
if (!rootElement) {
  throw new Error("React mount point missing");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
