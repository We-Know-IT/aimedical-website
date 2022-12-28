type Props = {
  isPrimary?: boolean;
  className?: string;
  children: React.ReactElement | string;
  onClick?: () => void;
  disabled?: boolean;
};

const commonStyles =
  " rounded-full text-base px-6 py-1.5 xl:py-3.5  md:px-12 md:py-2.5 transition-colors duration-200 flex flex-row items-center justify-center shadow-md sm:w-fit ";

export default function Button({
  children,
  onClick,
  className = "",
  isPrimary = false,
  disabled = false,
}: Props) {
  const getClassName = () => {
    if (isPrimary) {
      return " bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active ";
    }

    return " bg-white text-on-bg-primary hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 ";
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
