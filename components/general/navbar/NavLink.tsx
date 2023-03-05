import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button";

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
  const router = useRouter();
  const isActive = router.pathname === navLink.path;

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

  const getStyle = () => {
    if (isActive && color === "black") {
      return " text-primary active:text-primary-active hover:text-primary-hover ";
    }
    if (isActive && color === "white") {
      return " border-b-2 border-white text-on-primary hover:text-on-primary-hover active:text-on-primary-active";
    }
    if (color === "black") {
      return "font-semibold text-on-surface-primary hover:text-on-surface-primary-hover active:text-on-surface-primary-active";
    }
    if (color === "white") {
      return "font-semibold text-on-primary hover:text-on-primary-hover active:text-on-primary-active";
    }
  };
  return (
    <Link
      href={navLink.path}
      className={"h-full text-lg font-semibold " + getStyle()}>
      {navLink.label}
    </Link>
  );
}
