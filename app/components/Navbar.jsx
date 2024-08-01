import React from "react";
import Link from "next/link";
import { FaIdCard, FaRegistered } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { RiRegisteredFill, RiTeamFill } from "react-icons/ri";
import { Orbitron } from "next/font/google";
import Image from "next/image";
const orbitron = Orbitron({ weight: ["600"], subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className="bg-transparent   text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center navbar-start">
            <Link href="/" passHref>
              <Image
                src="/background2.webp"
                height={80}
                width={80}
                alt="Logo"
                className="hidden lg:block"
              />
            </Link>
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
              >
                <li>
                  <Link href="/pages/AboutUs">
                    <div className="flex items-center">
                      <FaIdCard className="mr-2" />
                      About Us
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/pages/Team">
                    <div className="flex items-center">
                      <RiTeamFill className="mr-2" />
                      Team
                    </div>
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <FaRegistered/><Link href="/pages/Registration">
                    Register Now
                    </Link>
                  </div>
                </li>
                <li>
                  <Link href="/">
                    <div className="flex items-center">
                      <IoMdHome className="mr-2" />
                      Home
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center flex-grow navbar-center">
            <h1
              className={`text-md md:text-3xl lg:text-5xl font-bold pr-2 ${orbitron.className}`}
            >
              Creative Minds 2024
            </h1>
          </div>

          <div className="flex items-center navbar-end">
            <div className="hidden lg:flex space-x-4">
              <Link href="/pages/AboutUs" passHref>
                <span className="p-2 flex flex-col items-center hover:bg-blue-300 rounded-md">
                  <FaIdCard className="mb-1" />
                  <span>About Us</span>
                </span>
              </Link>
              <Link href="/pages/Team" passHref>
                <span className="p-2 flex flex-col items-center hover:bg-blue-300 rounded-md">
                  <RiTeamFill className="mb-1" />
                  <span>Our Team</span>
                </span>
              </Link>
              <Link href="/pages/Registration" passHref>
                <span className="p-2 flex flex-col items-center hover:bg-blue-300 rounded-md">
                <GiArchiveRegister />
                  Register 
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;