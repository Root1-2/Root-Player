import { Outlet } from "react-router-dom";
import React from "react";

import Sidebar from "../components/Sidebar.jsx";

function AppLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="mx-5">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
