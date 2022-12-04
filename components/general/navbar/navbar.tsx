import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./nav-link";
import { navLinks } from "./nav-links";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    console.log("clicked");
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav
      className={
        navbarOpen
          ? "bg-gray-700 "
          : "" + " md:bg-transparent absolute w-screen"
      }>
      {/* Top navbar */}
      <div className="p-6 w-full  mx-auto flex justify-between  md:container">
        <Image src={"/images/logo.png"} alt={"logo"} width={56} height={56} />
        <div className="flex items-center">
          {/* Hamburger menu */}
          <button
            type="button"
            className="md:hidden"
            aria-controls="mobile-menu"
            onClick={(e) => toggleNavbar()}
            aria-expanded="false">
            <div className="space-y-2">
              <div className="w-8 h-0.5 bg-white" />
              <div className="w-8 h-0.5 bg-white" />
              <div className="w-8 h-0.5 bg-white" />
            </div>
          </button>
          {/* Desktop links */}
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-4">
                <ul className="flex items-center space-x-5">
                  {navLinks.map((link) => {
                    return (
                      <li key={link.path}>
                        <NavLink navLink={link} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile drop down menu */}
      <div
        className={(!navbarOpen ? "hidden " : "") + "md:hidden"}
        id="mobile-menu">
        <ul className="space-y-1 px-2 pt-2 pb-3 flex items-center flex-col">
          {navLinks.map((link) => {
            return (
              <li key={link.path} className="py-2">
                <NavLink navLink={link} />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
