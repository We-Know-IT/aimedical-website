import Link from "next/link";

export interface INavLink {
  label: string;
  path: string;
  highlight?: boolean;
}

interface Props {
  navLink: INavLink;
}

export default function NavLink({ navLink }: Props) {
  if (navLink.highlight) {
    return (
      <Link
        href={navLink.path}
        className="text-white bg-blue-dark px-6 py-2 rad rounded-full flex items-center">
        {navLink.label}
      </Link>
    );
  }
  return (
    <Link href={navLink.path} className="text-white">
      {navLink.label}
    </Link>
  );
}
