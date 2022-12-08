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
        "bg-white self-start py-4 px-10 rounded-full w-auto text-l shadow-lg " +
        className
      }
      onClick={onClick}>
      {children}
    </button>
  );
}
