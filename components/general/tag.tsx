type Props = {
  classes?: string;
  text: string;
};

export default function Button({ text, classes = "" }: Props) {
  return (
    <div
      className={
        classes +
        " bg-blue-accent text-color-primary rounded-full px-4 flex flex-col justify-center content-center"
      }>
      {text}
    </div>
  );
}
