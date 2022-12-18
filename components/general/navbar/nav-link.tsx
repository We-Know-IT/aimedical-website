import Link from "next/link";

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
        className="flex items-center rounded-full bg-primary px-6 py-2 text-lg font-semibold text-white hover:bg-primary-dark">
        {navLink.label}
      </Link>
    );
  }
  return (
    <Link
      href={navLink.path}
      className={
        "text-lg font-semibold" +
        (color === "black"
          ? " text-black hover:text-gray-500"
          : " text-white hover:text-white-hover")
      }>
      {navLink.label}
    </Link>
  );
}
