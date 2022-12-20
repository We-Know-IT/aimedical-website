import Image from "next/image";
type Props = {
  title: string;
  text: string;
  image: string;
};

export default function AdvantageCard({ title, text, image }: Props) {
  return (
    <div className="grid grid-cols-advantage-card gap-4">
      <Image
        src={image}
        width={40}
        height={40}
        alt={""}
        className="col-start-1 col-end-2"
      />
      <h3 className=" col-start-2 col-end-3 text-lg font-bold text-primary">
        {title}
      </h3>

      <p className=" col-start-2 col-end-3 text-on-bg-primary">{text}</p>
    </div>
  );
}
