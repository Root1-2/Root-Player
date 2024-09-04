import React, { createContext, useContext, useState } from "react";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import Logo from "../images/rootPlayerLogo.png";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [sideOpen, setSideOpen] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="flex h-full flex-col border-r bg-gray-50 shadow-sm">
        <div className="item-center flex flex-nowrap justify-between p-4 pb-2">
          <div className="flex flex-nowrap gap-3">
            <img
              src={Logo}
              alt="Logo"
              className={`overflow-hidden transition-all ${sideOpen ? "w-10" : "w-0"}`}
            />
            <p
              className={`flex flex-col justify-center overflow-hidden text-nowrap text-emerald-800 transition-all ${sideOpen ? "" : "w-0"}`}
            >
              Root Player
            </p>
          </div>
          <button
            onClick={() => setSideOpen((curr) => !curr)}
            className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
          >
            {sideOpen ? (
              <LuChevronFirst size={24} />
            ) : (
              <LuChevronLast size={24} />
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ sideOpen }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        {/* <div className="flex border-t p-3">
          <li
            className={`relative my-1 flex cursor-pointer items-center rounded-md px-3 py-2 font-medium transition-colors ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "text-gray-600 hover:bg-indigo-50"}`}
          >
            {icon}
            <span
              className={`overflow-hidden transition-all ${sideOpen ? "ml-3 w-52" : "ml-0 w-0"}`}
            >
              {text}
            </span>
          </li>
        </div> */}
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active }) {
  const { sideOpen } = useContext(SidebarContext);
  return (
    <li
      className={`group relative my-1 flex cursor-pointer items-center rounded-md px-3 py-2 font-medium transition-colors ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "text-gray-600 hover:bg-indigo-50"}`}
    >
      {icon}
      <span
        className={`overflow-hidden text-nowrap transition-all ${sideOpen ? "ml-3 w-52" : "ml-0 w-0"}`}
      >
        {text}
      </span>

      {!sideOpen && (
        <div
          className={`invisible absolute left-full ml-6 -translate-x-3 text-nowrap rounded-md bg-indigo-100 px-2 py-1 text-sm text-indigo-800 opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
