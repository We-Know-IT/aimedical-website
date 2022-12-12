import Link from "next/link";
import { useState } from "react";
import { useWindowScrollPositions } from "../../../utils/scroll";
import LogoIcon from "../../icons/common/logo";
import HamburgerIcon from "./hamburger-icon";
import NavLink from "./nav-link";
import { navLinks } from "./nav-links";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const { scrollX, scrollY } = useWindowScrollPositions();
  const hasScrolled = scrollY > 0;

  return (
    <nav
      className={
        (isNavbarOpen ? "bg-gray-700 absolute top-0 left-0 " : "") +
        "fixed top-0 left-0 right-0 md:bg-transparent z-10 transition-all" +
        (hasScrolled ? " md:bg-white" : "")
      }>
      {/* Top navbar */}
      <div className="py-6 mx-auto flex justify-between container">
        <Link href="/">
          <LogoIcon w={56} h={56} />
        </Link>
        <div className="flex items-center">
          {/* Hamburger menu */}
          <button
            type="button"
            className="lg:hidden h-10"
            aria-controls="mobile-menu"
            onClick={toggleNavbar}
            aria-expanded={isNavbarOpen}>
            <HamburgerIcon isOpen={isNavbarOpen} />
          </button>
          {/* Desktop links */}
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
            <div className="hidden lg:ml-6 lg:block">
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
        className={(!isNavbarOpen ? "hidden " : "") + "lg:hidden"}
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
