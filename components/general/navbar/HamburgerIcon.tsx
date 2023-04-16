interface Props {
  isOpen?: boolean;
  color?: "white" | "black";
}

export default function HamburgerIcon({
  isOpen = false,
  color = "white",
}: Props) {
  return (
    <span className="flex flex-col space-y-2">
      <span
        className={
          (isOpen ? "translate-y-1.5 rotate-45 " : "") +
          "h-0.5 w-8 transition-all" +
          (color === "black" ? "  bg-on-bg-primary" : " bg-on-primary")
        }
      />
      <span
        className={
          (isOpen ? "hidden " : "") +
          "h-0.5 w-8 transition-all" +
          (color === "black" ? "  bg-on-bg-primary" : " bg-on-primary")
        }
      />
      <span
        className={
          (isOpen ? "-translate-y-1 -rotate-45 " : "") +
          "h-0.5 w-8 transition-all" +
          (color === "black" ? "   bg-on-bg-primary" : " bg-on-primary")
        }
      />
    </span>
  );
}
