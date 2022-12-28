import Button from "../general/button";
import Image from "next/image";
import { ReactElement } from "react";

type Props = {
  title: string;
  text: string;
  image: string;
  onClick: () => void;
  buttonText: string;
  buttonIcon: ReactElement;
  iconPosition: "left" | "right";
};

export default function HowSlide({
  title,
  text,
  image,
  onClick,
  buttonText,
  buttonIcon,
  iconPosition,
}: Props) {
  return (
    <div className="relative flex w-full flex-col items-center justify-between gap-24 lg:flex-row">
      <Image src={image} width={312} height={524} alt="" />

      <div className="space-y-6">
        <div className="w-fit lg:absolute lg:top-0">
          <h2 className="mb-4  text-xl font-bold leading-6 text-primary lg:text-3xl lg:leading-10">
            How it works
          </h2>
          <div className=" mb-10 h-[2px] w-3/4 bg-primary" />
        </div>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="max-w-sm text-on-bg-primary">{text}</p>
      </div>

      {iconPosition === "right" && (
        <Button
          isPrimary={true}
          onClick={onClick}
          className="my-auto px-12 md:px-16">
          <>
            {buttonText}{" "}
            <span className="ml-4 -mt-1 text-2xl">{buttonIcon}</span>
          </>
        </Button>
      )}

      {iconPosition === "left" && (
        <Button isPrimary={true} onClick={onClick} className="my-auto md:px-16">
          <>
            <span className="mr-4 -mt-1 text-2xl">{buttonIcon}</span>{" "}
            {buttonText}
          </>
        </Button>
      )}
    </div>
  );
}
