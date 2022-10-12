import CssBaseline from "@mui/material/CssBaseline";
import ReactDOM from "react-dom/client";
import React from "react";

import { UserProvider } from "@/contexts";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <CssBaseline />
      <App />
    </UserProvider>
  </React.StrictMode>,
);
