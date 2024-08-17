// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="flex items-center justify-between w-full p-1 bg-gradient-to-r from-blue-500 to-blue-900 text-white">
        {/* Hamburger menu icon on the left side */}
        <div className="flex items-center justify-start">
          <div onClick={toggleSidebar}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </div>
        </div>

        {/* Centered Logo and Title */}
        <div className="flex items-center justify-center ">
          <Image
            src="/iic_logo.png"
            height={40}
            width={40}
            alt="IIC Logo"
            className="hidden lg:block"
            priority
          />
          <span className="align-middle p-3 pre font-extrabold text-3xl hidden lg:block">
            {" "}
            X{" "}
          </span>
          <Image
            src="/background2.webp"
            height={80}
            width={80}
            alt="Logo"
            className="hidden lg:block"
            priority
          />
        </div>

        {/* CTA Button on the right side */}
        <div className="flex items-center justify-end">
          <Link href="/pages/Registration">
            <button className="px-4 py-2 bg-blue-300 font-bold text-white hover:bg-blue-500 hover:text-white rounded-full btnbtn-sm mt-2 mb-1">
              Register Now
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay for the sidebar and other content */}
      <div
        className={`fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar Menu */}
      <div
        className={` text-white fixed left-0 top-0 w-64 h-full bg-blue-500 shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold">Menu</h2>
          <div onClick={toggleSidebar}>
            <HiX size={28} />
          </div>
        </div>
        <ul className="p-4">
            <Link href="/">
          <li className="py-2 hover:bg-blue-300 hover:text-white hover:rounded-lg">
            Home
          </li>
            </Link>
            <Link href="/pages/AboutUs">
          <li className="py-2 hover:bg-blue-300 hover:text-white hover:rounded-lg">
            About Event
          </li>
            </Link>
            <Link href="/pages/Schedule">
          <li className="py-2 hover:bg-blue-300 hover:text-white hover:rounded-lg">
            Schedule
          </li>
            </Link>
            <Link href="/pages/ContactUs">
          <li className="py-2 hover:bg-blue-300 hover:text-white hover:rounded-lg">
            Contact Us
          </li>
            </Link>
            <Link href="/pages/Registration">
          <li className="py-2 hover:bg-blue-300 hover:text-white hover:rounded-lg ">
            Register Now
          </li>
            </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
