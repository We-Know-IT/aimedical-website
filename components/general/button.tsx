type Props = {
  isBlue?: boolean;
  classes?: string;
  children: React.ReactElement;

  onClick: () => void;
};

const commonStyles =
  " rounded-full px-6 py-1.5 md:px-12 md:py-2.5 transition-colors duration-200 flex flex-row items-center shadow-md";

export default function Button({
  children,
  onClick,
  classes = "",
  isBlue = true,
}: Props) {
  return (
    <button
      className={
        isBlue
          ? classes + commonStyles + " bg-blue-100 text-color-secondary"
          : classes + commonStyles + " bg-white text-color-primary"
      }
      onClick={onClick}>
      {children}
    </button>
  );
}
