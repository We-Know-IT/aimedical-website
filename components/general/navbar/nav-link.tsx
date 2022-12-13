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
  color?: "white" | "black";
}

export default function NavLink({ navLink, color = "white" }: Props) {
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
        "font-semibold text-lg" +
        (color === "black"
          ? " text-black hover:text-gray-500"
          : " text-white hover:text-white-hover")
      }>
      {navLink.label}
    </Link>
  );
}
