import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar, { SidebarItem } from "../components/Sidebar.jsx";
import Playbar from "../components/Playbar.jsx";
import { GoHome } from "react-icons/go";
import {
  MdLocalFireDepartment,
  MdOutlineLibraryMusic,
  MdOutlineQueueMusic,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { CgUnavailable } from "react-icons/cg";
import { RiPlayList2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

function AppLayout() {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<CiSearch size={24} />} text="Search" />
        <SidebarItem icon={<GoHome size={24} />} text="Home" active />
        <SidebarItem
          icon={<MdOutlineSpaceDashboard size={24} />}
          text="Dashboard"
        />
        <SidebarItem
          icon={<MdOutlineLibraryMusic size={24} />}
          text="Library"
        />
        <SidebarItem
          icon={<MdLocalFireDepartment size={24} />}
          text="Most Played"
        />
        <SidebarItem icon={<CgUnavailable size={24} />} text="Not Played" />
        <SidebarItem icon={<MdOutlineQueueMusic size={24} />} text="Queue" />
        <SidebarItem icon={<RiPlayList2Line size={24} />} text="Playlist" />
      </Sidebar>

      <div className="m-5">
        <Outlet />
      </div>

      {/* <Playbar /> */}
    </div>
  );
}

export default AppLayout;
