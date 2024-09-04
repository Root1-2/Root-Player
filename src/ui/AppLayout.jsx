import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar, { SidebarItem } from "../components/Sidebar.jsx";
import { GoHome, GoGear } from "react-icons/go";
import {
  MdOutlineLibraryMusic,
  MdOutlineQueueMusic,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { CgUnavailable } from "react-icons/cg";
import { RiPlayList2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

function AppLayout() {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<CiSearch />} text="Search" />
        <SidebarItem icon={<GoHome />} text="Home" active />
        <SidebarItem icon={<MdOutlineSpaceDashboard />} text="Dashboard" />
        <SidebarItem icon={<MdOutlineLibraryMusic />} text="Library" />
        <SidebarItem icon={<FaFire />} text="Most Played" />
        <SidebarItem icon={<CgUnavailable />} text="Not Played" />
        <SidebarItem icon={<MdOutlineQueueMusic />} text="Queue" />
        <SidebarItem icon={<RiPlayList2Line />} text="Playlist" />
      </Sidebar>

      <div className="mx-5">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
