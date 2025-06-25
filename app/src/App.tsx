import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { Main } from "./Layout/mainLayout/Main";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
