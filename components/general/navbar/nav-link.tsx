import Link from "next/link";

export interface INavLink {
  label: string;
  path: string;
  isHightlighted?: boolean;
}

interface Props {
  navLink: INavLink;
}

export default function NavLink({ navLink }: Props) {
  if (navLink.isHightlighted) {
    return (
      <Link
        href={navLink.path}
        className="text-white bg-blue-100 px-6 py-2 rounded-full flex items-center font-semibold text-lg hover:bg-blue-50">
        {navLink.label}
      </Link>
    );
  }
  return (
    <Link
      href={navLink.path}
      className="text-white font-semibold hover:text-gray-300 text-lg">
      {navLink.label}
    </Link>
  );
}
