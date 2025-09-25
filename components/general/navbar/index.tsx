import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LogoIcon from "../../icons/common/Logo";
import HamburgerIcon from "./HamburgerIcon";
import { twMerge } from "tailwind-merge";
import BookDemo from "../BookDemo";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDermalyserDropdownOpen, setIsDermalyserDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  const hasScrolled = isClient && scrollY > 0;

  const logoSize = hasScrolled ? 48 : 56; // Shrink logo when scrolled

  // Prevent hydration errors by only applying scroll effects on client
  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial value

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const toggleDermalyserDropdown = () => {
    setIsDermalyserDropdownOpen(!isDermalyserDropdownOpen);
  };

  useEffect(() => {
    if (isNavbarOpen) {
      setIsNavbarOpen(false);
    }
    if (isDermalyserDropdownOpen) {
      setIsDermalyserDropdownOpen(false);
    }
  }, [router.asPath]);

  // Helper function to check if a path is active
  const isActivePath = (path: string, highlightNested = false) => {
    return highlightNested
      ? router.pathname.startsWith(path)
      : router.pathname === path;
  };

  // Helper function to get link styles
  const getLinkStyles = (path: string, highlightNested = false) => {
    const isActive = isActivePath(path, highlightNested);
    return twMerge(
      "font-robotoFlex font-normal text-darkblue hover:text-darkblue-hover active:text-darkblue-active transition-colors text-sm",
      isActive && "border-b-2 border-white text-darkblue-page-active"
    );
  };

  // Get current page name based on router path
  const getCurrentPageName = () => {
    const path = router.pathname;
    
    if (path === '/') return 'Home';
    if (path === '/about') return 'About us';
    if (path === '/dermalyser') return 'Dermalyser';
    if (path === '/dermalyser-2') return 'Dermalyser 2.0';
    if (path === '/clinical-validation' || path.startsWith('/clinical-validation/')) return 'Clinical Studies';
    if (path === '/pressroom' || path.startsWith('/pressroom/')) return 'News';
    if (path === '/privacy-policy') return 'Privacy Policy';
    
    // Default fallback
    return 'Home';
  };

  // Smooth scroll to contact section
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  

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
            <Link href="/" className="text-darkblue font-robotoFlex font-normal text-sm">
              Ai Medical Technology
            </Link>
            <div className="w-[1px] h-6 bg-darkblue"></div>
          </div>
          {/* Current page name next to logo */}
          <div className="flex flex-1 items-center justify-center !ml-3 lg:items-stretch lg:justify-start">
            <div className="hidden lg:block">
              <span className="font-robotoFlex font-normal text-darkblue-page-active text-sm">
                {getCurrentPageName()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          {/* Book a demo button - mobile only */}
          <Link
            href="/#contact"
            className="mr-4 lg:hidden bg-primary text-white px-6 py-2 rounded-full text-sm font-robotoFlex font-normal hover:bg-primary-hover transition-colors"
            onClick={(e) => {
              e.preventDefault();
              // Close hamburger menu if it's open
              if (isNavbarOpen) {
                setIsNavbarOpen(false);
              }
              const element = document.getElementById('contact');
              if (element) {
                const navbarHeight = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}>
            Book a demo
          </Link>
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
                {/* Dermalyser dropdown */}
                {/* <li 
                  className="relative"
                  onMouseEnter={() => setIsDermalyserDropdownOpen(true)}
                  onMouseLeave={() => setIsDermalyserDropdownOpen(false)}
                >
                  <button
                    className={twMerge(
                      "flex items-center space-x-1",
                      getLinkStyles("/dermalyser", true)
                    )}
                    onClick={toggleDermalyserDropdown}
                  >
                    
                    <span>Products</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isDermalyserDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`absolute top-full left-0 pt-2 w-48 transition-all duration-300 ease-in-out ${
                      isDermalyserDropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden">
                      <Link
                        href="/dermalyser"
                        className="block px-4 py-3 text-sm font-robotoFlex font-normal text-darkblue hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        Dermalyser
                      </Link>
                      <Link
                        href="/dermalyser-2"
                        className="block px-4 py-3 text-sm font-robotoFlex font-normal text-darkblue hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        Dermalyser 2.0
                      </Link>
                    </div>
                  </div>
                </li> */}

                {/* Products link TEMPORARY */}
                <li>
                  <Link href="/dermalyser" className={getLinkStyles("/dermalyser")}>
                    Product
                  </Link>
                </li>

                {/* Clinical Validation */}
                <li>
                  <Link href="/clinical-validation" className={getLinkStyles("/clinical-validation")}>
                    Clinical Studies
                  </Link>
                </li>
                
                {/* About us */}
                <li>
                  <Link href="/about" className={getLinkStyles("/about")}>
                    About us
                  </Link>
                </li>
                
                
                {/* Pressroom */}
                <li>
                  <Link href="/pressroom" className={getLinkStyles("/pressroom", true)}>
                    News
                  </Link>
                </li>
                
                {/* Book a demo */}
                <li>
                  <button
                    className="py-2 text-sm font-robotoFlex font-normal md:py-2 md:px-6 lg:py-2 text-white bg-primary rounded-full hover:bg-primary-hover transition-colors"
                    onClick={scrollToContact}
                  >
                    Book a demo
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile drop down menu */}
      <div
        className={`relative z-10 lg:hidden transition-all duration-300 ease-in-out ${
          isNavbarOpen ? "max-h-screen opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden"
        }`}
        id="mobile-menu"
        style={{
          maxHeight: isNavbarOpen ? 'calc(100vh - 80px)' : '0'
        }}>
        <div className="bg-surface-primary">
        <ul className="flex flex-col items-start w-full space-y-1 px-4 py-16 pb-12">


          {/* Dermalyser with mobile dropdown */}
          {/* <li 
            className={`py-0 px-6 w-full transition-all duration-300 ease-in-out transform ${
              isNavbarOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: isNavbarOpen ? "100ms" : "0ms"
            }}
          >
            <div className="text-lg">
              <button
                className="flex items-center justify-between w-full font-robotoFlex font-light text-darkblue hover:text-darkblue-hover text-xl"
                onClick={toggleDermalyserDropdown}
              >
                <span>Products</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDermalyserDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`ml-4 space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
                  isDermalyserDropdownOpen
                    ? "opacity-100 max-h-32 mt-2"
                    : "opacity-0 max-h-0 mt-0"
                }`}
              >
                <Link
                  href="/dermalyser"
                  className="block font-robotoFlex font-light text-darkblue hover:text-darkblue-hover text-lg"
                >
                  Dermalyser
                </Link>
                <Link
                  href="/dermalyser-2"
                  className="block font-robotoFlex font-light text-darkblue hover:text-darkblue-hover text-lg"
                >
                  Dermalyser 2.0
                </Link>
              </div>
            </div>
          </li> */}
          {/* Products link TEMPORARY */}
          <li 
            className={`py-0 px-6 w-full transition-all duration-300 ease-in-out transform ${
              isNavbarOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: isNavbarOpen ? "100ms" : "0ms"
            }}
          >
            <div className="text-lg">
              <Link href="/dermalyser" className="font-robotoFlex font-light text-darkblue hover:text-darkblue-hover text-xl">
                Product
              </Link>
            </div>
          </li>


          {/* Clinical Validation */}
          <li 
            className={`py-0 px-6 w-full transition-all duration-300 ease-in-out transform ${
              isNavbarOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: isNavbarOpen ? "200ms" : "0ms"
            }}
          >
            <div className="text-lg">
              <Link href="/clinical-validation" className="font-robotoFlex font-light text-darkblue hover:text-darkblue-hover text-xl">
                Clinical studies
              </Link>
            </div>
          </li>

          {/* About us */}
          <li 
            className={`py-0 px-6 w-full transition-all duration-300 ease-in-out transform ${
              isNavbarOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: isNavbarOpen ? "300ms" : "0ms"
            }}
          >
            <div className="text-lg">
              <Link href="/about" className="font-robotoFlex font-light text-darkblue hover:text-darkblue-hover text-xl">
                About us
              </Link>
            </div>
          </li>


          {/* Pressroom */}
          <li 
            className={`py-0 px-6 w-full transition-all duration-300 ease-in-out transform ${
              isNavbarOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: isNavbarOpen ? "400ms" : "0ms"
            }}
          >
            <div className="text-lg">
              <Link href="/pressroom" className="font-robotoFlex font-light text-darkblue hover:text-darkblue-hover text-xl">
                News
              </Link>
            </div>
          </li>
        </ul>
        
        {/* BookDemo section in mobile menu */}
        <div 
          className={`px-4 pb-8 transition-all duration-300 ease-in-out transform ${
            isNavbarOpen 
              ? "translate-y-0 opacity-100" 
              : "translate-y-4 opacity-0"
          }`}
          style={{
            transitionDelay: isNavbarOpen ? "500ms" : "0ms"
          }}
        >
          <BookDemo 
            description="You’re welcome to contact us for any questions you might have and we’ll contact you within 48 hours."
            theme={{
              containerBg: "bg-beige-dark",
              titleColor: "text-darkblue-page-active",
              textColor: "text-darkblue",
              inputBg: "bg-beige",
              inputText: "text-darkblue",
              inputPlaceholder: "placeholder-gray-500",
              buttonIntent: "transparentblue"
            }
          }
          />
        </div>
        </div>
      </div>
      {isNavbarOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-screen "
          onClick={toggleNavbar}></div>
      )}
    </nav>
  );
}
