type Props = {
  isBlue?: boolean;
  className?: string;
  children: React.ReactElement | string;
  onClick: () => void;
};

const commonStyles =
  " rounded-full text-base px-6 py-1.5 xl:py-3.5  md:px-12 md:py-2.5 transition-colors duration-200 flex flex-row items-center justify-center shadow-md sm:w-fit ";

export default function Button({
  children,
  onClick,
  className = "",
  isBlue = false,
}: Props) {
  return (
    <button
      className={
        (isBlue
          ? "bg-primary  text-on-primary hover:bg-primary-dark "
          : "bg-background-primary text-on-bg-primary hover:bg-background-primary-hover") +
        commonStyles +
        className
      }
      onClick={onClick}>
      {children}
    </button>
  );
}
