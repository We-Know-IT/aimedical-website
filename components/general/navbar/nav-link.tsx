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
        className="flex items-center rounded-full bg-primary px-6 py-2 text-lg font-semibold text-on-primary hover:bg-primary-hover active:bg-primary-active">
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
          ? " text-on-bg-primary hover:text-on-bg-primary-hover"
          : " text-on-primary hover:text-on-primary-hover")
      }>
      {navLink.label}
    </Link>
  );
}
