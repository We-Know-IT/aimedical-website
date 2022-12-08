import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LogoIcon from "../../icons/common/logo";
import HamburgerIcon from "./hamburger-icon";
import NavLink from "./nav-link";
import { navLinks } from "./nav-links";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    console.log("clicked");
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav
      className={
        (isNavbarOpen ? "bg-gray-700 " : "") +
        " md:bg-transparent absolute w-full"
      }>
      {/* Top navbar */}
      <div className="p-6 w-full  mx-auto flex justify-between  md:container">
        <Link href="/">
          <LogoIcon w={56} h={56} />
        </Link>
        <div className="flex items-center">
          {/* Hamburger menu */}
          <button
            type="button"
            className="md:hidden h-10"
            aria-controls="mobile-menu"
            onClick={toggleNavbar}
            aria-expanded={isNavbarOpen}>
            <HamburgerIcon isOpen={isNavbarOpen} />
          </button>
          {/* Desktop links */}
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="hidden md:ml-6 md:block">
              <ul className="flex items-center space-x-6">
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
      {/* Mobile drop down menu */}
      <div
        className={(!isNavbarOpen ? "hidden " : "") + "md:hidden"}
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
