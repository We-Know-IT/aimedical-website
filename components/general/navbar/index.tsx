import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useWindowScrollPositions } from "../../../utils/scroll";
import LogoIcon from "../../icons/common/Logo";
import HamburgerIcon from "./HamburgerIcon";
import NavLink from "./NavLink";
import { navLinks } from "./nav-links";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const {
    scrollPosition: { scrollY },
  } = useWindowScrollPositions();
  const router = useRouter();
  const hasScrolled = scrollY > 0;

  const logoSize = hasScrolled ? 48 : 56; // Shrink logo when scrolled

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  useEffect(() => {
    if (isNavbarOpen) {
      setIsNavbarOpen(false);
    }
  }, [router.asPath]);
  

  return (
    <nav
      className={`bg-surface-primary fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      {/* Top navbar */}
      <div
        className={`container relative z-10 mx-auto flex justify-between transition-all duration-300 ease-in-out ${
          hasScrolled ? "py-4" : "py-6"
        }`}>
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <LogoIcon 
              w={logoSize} 
              h={logoSize} 
            />
          </Link>
          {/* AI Medical Technology text with vertical bar */}
          <div className="hidden lg:flex items-center space-x-3">
            <span className="text-darkblue font-haasGrot font-light text-lg">Ai Medical Technology</span>
            <div className="w-[1px] h-6 bg-darkblue"></div>
          </div>
          {/* Home link next to logo */}
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
          <div className="hidden lg:block">
            <NavLink
              navLink={navLinks[0]}
              color="white"
             />
          </div>
          </div>
        </div>

        <div className="flex items-center">
          {/* Hamburger menu */}
          <button
            type="button"
            className="h-10 lg:hidden"
            aria-controls="mobile-menu"
            name="mobile-menu"
            onClick={toggleNavbar}
            aria-label="Open navigation menu button"
            aria-expanded={isNavbarOpen}>
            <HamburgerIcon
              isOpen={isNavbarOpen}
              color="white"
            />
          </button>
          {/* Desktop links */}
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
            <div className="hidden lg:ml-6 lg:block">
              <ul className="flex items-center space-x-6">
                {navLinks.slice(1).map((link) => {
                  return (
                    <li key={link.path}>
                      <NavLink
                        navLink={link}
                        color="white"
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
        className={`relative z-10 lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isNavbarOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu">
        <ul className="flex flex-col items-center space-y-1 px-2 pt-2 pb-8 bg-surface-primary">
          {navLinks.map((link, index) => {
            return (
              <li 
                key={link.path} 
                className={`py-2 transition-all duration-300 ease-in-out transform ${
                  isNavbarOpen 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isNavbarOpen ? `${index * 100}ms` : "0ms"
                }}
              >
                <NavLink
                  navLink={link}
                  color="white"
                />
              </li>
            );
          })}
        </ul>
      </div>
      {isNavbarOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-screen "
          onClick={toggleNavbar}></div>
      )}
    </nav>
  );
}
