import Link from "next/link";
import Button from "../button";

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
      <Link href={navLink.path}>
        <Button
          className="font-bold md:px-8 md:py-2 md:text-lg xl:py-2"
          isPrimary>
          {navLink.label}
        </Button>
      </Link>
    );
  }
  return (
    <Link
      href={navLink.path}
      className={
        "text-lg font-semibold" +
        (color === "black"
          ? " text-on-surface-primary hover:text-on-surface-primary-hover active:text-on-surface-primary-active"
          : " text-on-primary hover:text-on-primary-hover active:text-on-primary-active")
      }>
      {navLink.label}
    </Link>
  );
}
