import Link from "next/link";
import { useEffect, useState } from "react";
import { useWindowScrollPositions } from "../../../utils/scroll";
import LogoIcon from "../../icons/common/logo";
import HamburgerIcon from "./hamburger-icon";
import NavLink from "./nav-link";
import { navLinks } from "./nav-links";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [logoSize, setLogoSize] = useState(56);
  const { scrollY } = useWindowScrollPositions();
  const hasScrolled = scrollY > 0;

  useEffect(() => {
    if (hasScrolled) {
      setLogoSize(34);
    } else {
      setLogoSize(56);
    }
  }, [hasScrolled]);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav
      className={
        (isNavbarOpen || hasScrolled
          ? "bg-background-primary shadow-xl"
          : " bg-transparent") +
        " fixed top-0 left-0 right-0 z-10 transition-all"
      }>
      {/* Top navbar */}
      <div
        className={
          " duration-250 container mx-auto flex justify-between ease-in-out " +
          (hasScrolled ? "py-4" : "py-6")
        }>
        <h1 aria-label="AI Medical" className="flex flex-col justify-center">
          <Link href="/">
            <LogoIcon w={logoSize} h={logoSize} />
          </Link>
        </h1>

        <div className="flex items-center">
          {/* Hamburger menu */}
          <button
            type="button"
            className="h-10 lg:hidden"
            aria-controls="mobile-menu"
            onClick={toggleNavbar}
            aria-expanded={isNavbarOpen}>
            <HamburgerIcon
              isOpen={isNavbarOpen}
              color={isNavbarOpen || hasScrolled ? "black" : "white"}
            />
          </button>
          {/* Desktop links */}
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
            <div className="hidden lg:ml-6 lg:block">
              <ul className="flex items-center space-x-6">
                {navLinks.map((link) => {
                  return (
                    <li key={link.path}>
                      <NavLink
                        navLink={link}
                        color={hasScrolled ? "black" : "white"}
                      />
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
        <ul className="flex flex-col items-center space-y-1 px-2 pt-2 pb-8">
          {navLinks.map((link) => {
            return (
              <li key={link.path} className="py-2">
                <NavLink
                  navLink={link}
                  color={isNavbarOpen ? "black" : "white"}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
