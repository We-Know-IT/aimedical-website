import Link from "next/link";
import { useRouter } from "next/router";
import { LinkButton, Button } from "../Button";
import Typography from "../../common/Typography";
import { twMerge } from "tailwind-merge";

export interface INavLink {
  label: string;
  path: string;
  isHightlighted?: boolean;
  highlightNestedPaths?: boolean;
}

interface Props {
  navLink: INavLink;
  color?: "white" | "black";
}

export default function NavLink({ navLink, color = "white" }: Props) {
  const router = useRouter();
  const isActive = navLink.highlightNestedPaths
    ? router.pathname.startsWith(navLink.path)
    : router.pathname === navLink.path;

  if (navLink.isHightlighted) {
    return (
      <LinkButton
        className="py-2 text-lg font-haasGrot font-thin md:py-2 md:px-6 lg:py-3"
        href={navLink.path}>
        {navLink.label}
      </LinkButton>
    );
  }

  const getStyle = () => {
    if (isActive && color === "black") {
      return " text-primary active:text-primary-active hover:text-primary-hover ";
    }
    if (isActive && color === "white") {
      return " border-b-2 border-white text-darkblue-page-active hover:text-darkblue-hover active:text-darkblue-active";
    }
    if (color === "black") {
      return "font-normal text-on-surface-primary hover:text-on-surface-primary-hover active:text-on-surface-primary-active";
    }
    if (color === "white") {
      return "font-haasGrot font-light text-darkblue hover:text-darkblue-hover active:text-darkblue-active";
    }
  };
  return (
    <Typography
      variant="p"
      className={twMerge("h-full text-lg font-haasGrot font-light", getStyle())}>
      <Link href={navLink.path}>{navLink.label}</Link>
    </Typography>
  );
}
