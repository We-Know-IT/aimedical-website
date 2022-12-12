import { Children, CSSProperties } from "react";
type Props = {
  onClick: () => void;
  children?: string;
  className?: string;
};

export default function ActionButton({ onClick, children, className }: Props) {
  return (
    <button
      className={
        "bg-white self-start py-4 px-10 rounded-full w-auto text-lg font-semibold shadow-lg z-10 hover:bg-gray-300 " +
        (className || "")
      }
      onClick={onClick}>
      {children}
    </button>
  );
}
