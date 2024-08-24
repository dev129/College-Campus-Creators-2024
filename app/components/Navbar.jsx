"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `w-full h-16 p-1 transition-all duration-300 ${
    scrolled
      ? "bg-gradient-to-r from-blue-600 to-blue-900 shadow-lg"
      : "bg-gradient-to-r from-blue-500 to-blue-800"
  }`;

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/pages/AboutUs", label: "About Event" },
    { href: "/pages/Schedule", label: "Schedule" },
    { href: "/pages/ContactUs", label: "Contact Us" },
    { href: "/pages/Registration", label: "Register Now" },
  ];

  return (
    <div>
      {/* Navbar */}
      <div className={navbarClasses}>
        <div className="container mx-auto flex items-center justify-between h-full relative">
          {/* Hamburger menu icon */}
          <div
            className="flex items-center cursor-pointer z-10"
            onClick={toggleSidebar}
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </div>

          {/* Centered Logo and Title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/iic_logo.png"
                height={40}
                width={40}
                alt="IIC Logo"
                className="hidden lg:block"
                priority
              />
              <span className="font-extrabold text-3xl hidden lg:block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                X
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
          </div>

          {/* CTA Button */}
          <Link href="/pages/Registration" passHref>
            <span className="relative z-10 bg-white text-blue-900 px-6 py-2 rounded-lg font-bold transition-colors duration-300 hidden lg:flex">
              Register Now
            </span>
          </Link>
        </div>
      </div>

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
          isOpen ? 'translate-x-0' : '-translate-x-full'
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
    </div>
  );
};

export default Navbar;
