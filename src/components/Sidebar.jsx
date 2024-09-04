import React from "react";
import { GoGear, GoHome } from "react-icons/go";
import { LuChevronFirst } from "react-icons/lu";

export default function Sidebar({ children }) {
  return (
    <aside className="h-screen">
      <nav className="flex h-full flex-col border-r bg-gray-50 shadow-sm">
        <div className="item-center flex justify-between p-4 pb-2">
          <img src="" alt="Logo" className="w-32" />
          <button className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100">
            <LuChevronFirst />
            <span></span>
          </button>
        </div>

        <ul className="flex-1 px-3">{children}</ul>

        <div className="flex border-t p-3">
          <button className="flex gap-2">
            <span>Settings</span>
          </button>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  return (
    <li
      className={`relative my-1 flex cursor-pointer items-center rounded-md px-3 py-2 font-medium transition-colors ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "text-gray-600 hover:bg-indigo-50"}`}
    >
      {icon}
      <span className="ml-3 w-52">{text}</span>
      {alert && (
        <div className={`absolute right-2 h-2 w-2 rounded bg-indigo-400`}></div>
      )}
    </li>
  );
}
