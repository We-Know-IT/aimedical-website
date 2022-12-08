type Props = {
  classes?: string;
  text: string;
};

export default function Button({ text, classes = "" }: Props) {
  return (
    <div
      className={
        classes +
        " bg-gradient-to-l from-blue-100 to-blue-50 text-color-on-blue rounded-full px-8 py-1 flex flex-col justify-center content-center"
      }>
      {text}
    </div>
  );
}
