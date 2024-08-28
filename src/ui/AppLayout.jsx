import { Outlet } from "react-router-dom";
import React from "react";

function AppLayout() {
  return (
    <div>
      <p>AppLayout</p>
      <Outlet />
    </div>
  );
}

export default AppLayout;
