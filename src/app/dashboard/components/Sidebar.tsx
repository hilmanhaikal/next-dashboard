import { useState } from "react";
import { FiMenu, FiLogOut } from "react-icons/fi";
import { FaHome, FaChartLine, FaUser, FaCog } from "react-icons/fa";
import Link from "next/link";
import { Tooltip } from "react-tooltip"; // Install if needed: npm install react-tooltip

const menuItems = [
  { name: "Home", icon: <FaHome />, link: "/dashboard" },
  { name: "Dashboard", icon: <FaChartLine />, link: "/dashboard" },
  { name: "Users", icon: <FaUser />, link: "/users" },
  { name: "Settings", icon: <FaCog />, link: "/settings" },
];

export default function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) {
  return (
    <div className={`bg-gray-900 text-white h-screen fixed top-0 left-0 transition-all duration-300 ${isOpen ? "w-64" : "w-20"} flex flex-col`}>
      {/* Sidebar Toggle */}
      <button onClick={toggleSidebar} className="p-4 focus:outline-none hover:bg-gray-800 flex items-center">
        <FiMenu size={24} />
        {isOpen && <span className="ml-3 text-lg">Menu</span>}
      </button>

      {/* Navigation Menu */}
      <nav className="mt-4 flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link} className="flex items-center gap-4 p-4 hover:bg-gray-700 transition-colors relative">
                <span>{item.icon}</span>
                {isOpen && <span>{item.name}</span>}
                {!isOpen && (
                  <Tooltip anchorSelect={`#menu-item-${index}`} place="right">
                    {item.name}
                  </Tooltip>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 mt-auto hover:bg-red-600 transition-colors flex items-center justify-center cursor-pointer">
        <FiLogOut size={24} />
        {isOpen && <span className="ml-3">Logout</span>}
      </div>
    </div>
  );
}
