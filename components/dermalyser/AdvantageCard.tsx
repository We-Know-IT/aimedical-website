type Props = {
  title: string;
  text: string;
  image: string;
};

export default function AdvantageCard({ title, text, image }: Props) {
  return (
    <div className="grid grid-cols-advantage-card gap-4">
      <h3 className=" col-start-2 col-end-3 text-lg font-bold text-primary">
        {title}
      </h3>

      <p className=" col-start-2 col-end-3 text-on-bg-primary">{text}</p>
    </div>
  );
}
