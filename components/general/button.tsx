type Props = {
  isBlue?: boolean;
  className?: string;
  children: React.ReactElement;

  onClick: () => void;
};

const commonStyles =
  " rounded-full text-base px-6 py-1.5 md:px-12 md:py-2.5 transition-colors duration-200 flex flex-row items-center shadow-md";

export default function Button({
  children,
  onClick,
  className = "",
  isBlue = true,
}: Props) {
  return (
    <button
      className={
        (isBlue
          ? "bg-blue-100 text-color-on-blue hover:bg-blue-85 "
          : "bg-background-primary text-color-on-primary hover:bg-background-secondary ") +
        className +
        commonStyles
      }
      onClick={onClick}>
      {children}
    </button>
  );
}
