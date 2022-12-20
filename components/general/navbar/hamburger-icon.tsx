interface Props {
  isOpen?: boolean;
  color?: "white" | "black";
}

export default function HamburgerIcon({
  isOpen = false,
  color = "white",
}: Props) {
  return (
    <div className="space-y-2">
      <div
        className={
          (isOpen ? "translate-y-1.5 rotate-45 " : "") +
          "h-0.5 w-8 transition-all" +
          (color === "black" ? "  bg-black" : " bg-white")
        }
      />
      <div
        className={
          (isOpen ? "hidden " : "") +
          "h-0.5 w-8 transition-all" +
          (color === "black" ? "  bg-black" : " bg-white")
        }
      />
      <div
        className={
          (isOpen ? "-translate-y-1 -rotate-45 " : "") +
          "h-0.5 w-8 transition-all" +
          (color === "black" ? "  bg-black" : " bg-white")
        }
      />
    </div>
  );
}
