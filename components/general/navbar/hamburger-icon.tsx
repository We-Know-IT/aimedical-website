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
          (isOpen ? "rotate-45 translate-y-1.5 " : "") +
          "w-8 h-0.5 transition-all" +
          (color === "black" ? "  bg-black" : " bg-white")
        }
      />
      <div
        className={
          (isOpen ? "hidden " : "") +
          "w-8 h-0.5 transition-all" +
          (color === "black" ? "  bg-black" : " bg-white")
        }
      />
      <div
        className={
          (isOpen ? "-rotate-45 -translate-y-1 " : "") +
          "w-8 h-0.5 transition-all" +
          (color === "black" ? "  bg-black" : " bg-white")
        }
      />
    </div>
  );
}
