type Props = {
  isBlue?: boolean;
  classes?: string;
  children: React.ReactElement;

  onClick: () => void;
};

const commonStyles =
  " rounded-full text-base px-6 py-1.5 md:px-12 md:py-2.5 transition-colors duration-200 flex flex-row items-center shadow-md";

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
          ? classes + commonStyles + " bg-blue-100 text-color-on-blue"
          : classes +
            commonStyles +
            " bg-background-primary text-color-on-primary"
      }
      onClick={onClick}>
      {children}
    </button>
  );
}
