import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar, { SidebarItem } from "../components/Sidebar.jsx";
import { GoHome, GoGear } from "react-icons/go";

function AppLayout() {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<GoHome />} text="Home" active />
        <SidebarItem icon={<GoGear />} text="Settings" />
      </Sidebar>

      <div className="mx-5">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
