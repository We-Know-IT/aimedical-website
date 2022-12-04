import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav-link";
import { navLinks } from "./nav-links";

export default function Navbar() {
  return (
    <nav className="absolute w-screen container-2xl">
      {/* Top navbar */}
      <div className="p-6 w-full  mx-auto flex justify-between">
        <Image src={"/images/logo.png"} alt={"logo"} width={56} height={56} />
        <div className="flex items-center">
          <button
            type="button"
            className="md:hidden"
            aria-controls="mobile-menu"
            aria-expanded="false">
            <div className="space-y-2">
              <div className="w-8 h-0.5 bg-white"></div>
              <div className="w-8 h-0.5 bg-white"></div>
              <div className="w-8 h-0.5 bg-white"></div>
            </div>
          </button>
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
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
    </nav>
  );
}
