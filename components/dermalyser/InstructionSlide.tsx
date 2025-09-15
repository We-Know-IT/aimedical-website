import Image from "next/image";
import Typography from "../common/Typography";

type Props = {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
};

export default function HowSlide({ title, text, image, imageAlt }: Props) {
  return (
    <div className="relative flex w-full flex-col items-center justify-between gap-6 lg:flex-row">
      <div className=" relative flex w-full flex-col items-center gap-6 lg:flex-row">
        <Image
          src={image}
          width={529}
          height={979}
          alt={imageAlt}
          className="w-72"
        />
        <div className="mt-6 space-y-2  lg:mt-0">
          <div className="w-fit lg:absolute lg:top-0">
            <Typography variant="p" className="font-bold text-primary">
              HOW IT WORKS{" "}
            </Typography>
            <div className="mb-4 h-[3px] w-full rounded-full bg-primary" />
          </div>
          <Typography variant="h2">{title}</Typography>
          <p className="max-w-sm text-on-bg-primary">{text}</p>
        </div>
      </div>
    </div>
  );
}
