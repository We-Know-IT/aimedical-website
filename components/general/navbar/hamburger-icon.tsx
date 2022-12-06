interface Props {
  isOpen: boolean;
}

export default function HamburgerIcon({ isOpen }: Props) {
  return (
    <div className="space-y-2">
      <div
        className={
          (isOpen ? "rotate-45 translate-y-1.5 " : "") +
          "w-8 h-0.5 bg-white transition-all"
        }
      />
      <div
        className={
          (isOpen ? "hidden " : "") + "w-8 h-0.5 bg-white transition-all"
        }
      />
      <div
        className={
          (isOpen ? "-rotate-45 -translate-y-1 " : "") +
          "w-8 h-0.5 bg-white transition-all"
        }
      />
    </div>
  );
}
