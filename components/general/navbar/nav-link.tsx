import Link from "next/link";
import { useState } from "react";
import { useWindowScrollPositions } from "../../../utils/scroll";

export interface INavLink {
  label: string;
  path: string;
  isHightlighted?: boolean;
}

interface Props {
  navLink: INavLink;
}

export default function NavLink({ navLink }: Props) {
  const { scrollX, scrollY } = useWindowScrollPositions();
  const hasScrolled = scrollY > 0;

  if (navLink.isHightlighted) {
    return (
      <Link
        href={navLink.path}
        className="text-white bg-blue-100 px-6 py-2 rounded-full flex items-center font-semibold text-lg hover:bg-blue-hover">
        {navLink.label}
      </Link>
    );
  }
  return (
    <Link
      href={navLink.path}
      className={
        "text-white font-semibold hover:text-gray-300 text-lg" +
        (hasScrolled ? " text-black hover:text-gray-500" : "")
      }>
      {navLink.label}
    </Link>
  );
}
