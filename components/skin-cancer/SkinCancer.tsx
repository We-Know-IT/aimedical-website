import React from "react";
import Image from "next/image";
import Typography from "../common/Typography";
import Accordion from "./Accordion";

type Props = {
  content: React.ReactNode | string;
  title: string;
  imageSrc?: string;
  alt?: string;
};

const imageSize = 128;

export default function SkinCancer({ content, imageSrc, alt, title }: Props) {
  return (
    <div className="flex w-full flex-col items-start justify-center md:flex-row">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={alt || ""}
          width={imageSize}
          height={imageSize}
        />
      )}
      <Accordion title={title} content={content} className="sm:hidden" />
      <div className="hidden py-4 sm:block">
        <Typography variant="h3">{title}</Typography>
        <Typography variant="p" className="mx-auto text-left">
          {content}
        </Typography>
      </div>
    </div>
  );
}
