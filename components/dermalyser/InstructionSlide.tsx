import Button from "../general/button";
import Image from "next/image";

type Props = {
  title: string;
  text: string;
  image: string;
  onClick: () => void;
  buttonText: string;
};

export default function HowSlide({
  title,
  text,
  image,
  onClick,
  buttonText,
}: Props) {
  return (
    <div className="relative flex w-full flex-col items-center justify-between gap-24 md:flex-row">
      <Image src={image} width={312} height={524} alt="" />

      <div className="space-y-6">
        <div className="w-fit">
          <h2 className="mb-4  text-xl font-bold leading-6 text-primary md:text-3xl md:leading-10">
            How it works
          </h2>
          <div className=" mb-10 h-[2px] w-3/4 bg-primary" />
        </div>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="max-w-sm text-on-bg-primary">{text}</p>
      </div>
      <Button isBlue={true} onClick={onClick} className="my-auto">
        {buttonText}
      </Button>
    </div>
  );
}
