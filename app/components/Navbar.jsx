"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

  const navbarClasses = `w-full p-1 transition-all duration-300 ${
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
        <div className="container mx-auto flex items-center justify-between">
          {/* Hamburger menu icon */}
          <motion.div
            className="flex items-center ml-4 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleSidebar}
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </motion.div>

          {/* Centered Logo and Title */}
          <div className="flex items-center justify-center space-x-2 flex-grow">
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

          {/* CTA Button */}
          <Link href="/pages/Registration" passHref>
            <motion.div
              className="relative overflow-hidden group mr-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 bg-white text-blue-900 px-6 py-2 rounded-lg  font-bold hover:text-red-600 transition-colors duration-300 hidden lg:flex ">
                Register Now
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-black bg-opacity-50"
            onClick={toggleSidebar}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar Menu */}
      <motion.div
        className="text-white fixed left-0 top-0 w-64 h-full bg-gradient-to-b from-blue-600 to-blue-900 shadow-lg z-40"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-between items-center p-4 border-b border-blue-400">
          <h2 className="font-bold text-xl">Menu</h2>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleSidebar}
          >
            <HiX size={28} />
          </motion.div>
        </div>
        <ul className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={item.href} passHref>
                <span className="block py-2 px-4 hover:bg-blue-400 hover:text-white rounded-lg transition-colors duration-300">
                  {item.label}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
