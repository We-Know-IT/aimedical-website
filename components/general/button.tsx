type Props = {
  isBlue?: boolean;
  className?: string;
  children: React.ReactElement | string;
  onClick: () => void;
  disabled?: boolean;
};

const commonStyles =
  " rounded-full text-base px-6 py-1.5 xl:py-3.5  md:px-12 md:py-2.5 transition-colors duration-200 flex flex-row items-center justify-center shadow-md sm:w-fit ";

export default function Button({
  children,
  onClick,
  className = "",
  isBlue = false,
  disabled = false,
}: Props) {
  const getClassName = () => {
    if (isBlue) {
      return " bg-primary text-color-on-blue hover:bg-primary-dark ";
    }

    return " bg-background-primary text-color-on-primary hover:bg-white-hover ";
  };

  return (
    <button
      className={
        getClassName() +
        commonStyles +
        className +
        (disabled ? " cursor-not-allowed opacity-50 " : "")
      }
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
}
