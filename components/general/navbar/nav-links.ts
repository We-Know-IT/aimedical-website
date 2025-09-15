import { INavLink } from "./NavLink";

export const navLinks: INavLink[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Dermalyser",
    path: "/dermalyser",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: " Clinical Validation",
    path: "/clinical-validation",
  },
  {
    label: "Pressroom",
    path: "/pressroom",
    highlightNestedPaths: true,
  },
  {
    label: "Book a demo",
    path: "#contact",
    isHightlighted: true,
  },
];
