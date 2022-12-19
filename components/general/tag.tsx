type Props = {
  classes?: string;
  text: string;
};

export default function Tag({ text, classes = "" }: Props) {
  return (
    <div
      className={
        classes +
        " flex flex-col content-center justify-center rounded-full bg-gradient-to-l from-primary to-primary/50 px-8 py-1 text-on-primary"
      }>
      {text}
    </div>
  );
}
