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
    label: "Skin Cancer",
    path: "/skin-cancer",
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
    label: "Contact us",
    path: "#contact",
    isHightlighted: true,
  },
];
