import Typography from "../common/Typography";

type Props = {
  title: string;
  text: string;
};

export default function AdvantageCard({ title, text }: Props) {
  return (
    <div className=" flex h-full  flex-col justify-between items-center max-w-2xl">
      <Typography variant="h3" className=" text-on-secondary self-start w-full">
        {title}
      </Typography>
      <Typography variant="p" className="self-start w-full">{text}</Typography>
    </div>
  );
}
