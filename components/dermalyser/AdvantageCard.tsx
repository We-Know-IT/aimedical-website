type Props = {
  title: string;
  text: string;
};

export default function AdvantageCard({ title, text }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-bold text-primary">{title}</h3>

      <p className="text-on-bg-primary">{text}</p>
    </div>
  );
}
