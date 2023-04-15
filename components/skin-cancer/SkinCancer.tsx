import React from "react";
import Image from "next/image";

type Props = {
  textComponent: React.ReactNode;
  imageSrc: string;
  alt: string;
};

const imageSize = 128;

export default function SkinCancer({ textComponent, imageSrc, alt }: Props) {
  return (
    <div className="flex flex-col items-start justify-center space-x-2 md:flex-row">
      <Image src={imageSrc} alt={alt} width={imageSize} height={imageSize} />
      <p className="mx-auto text-left  text-lg font-normal  leading-7  text-on-bg-primary">
        {textComponent}
      </p>
    </div>
  );
}
