"use client";

import { HiX } from "react-icons/hi";
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar, menuItems }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`text-white fixed left-0 top-0 w-64 h-full bg-gradient-to-b from-blue-600 to-blue-900 shadow-lg z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 border-b border-blue-400">
          <h2 className="font-bold text-xl">Menu</h2>
          <div onClick={toggleSidebar}>
            <HiX size={28} />
          </div>
        </div>
        <ul className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} passHref>
                <span className="block py-2 px-4 hover:bg-blue-400 hover:text-white rounded-lg transition-colors duration-300">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
