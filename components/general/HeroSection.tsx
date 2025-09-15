import React from "react";
import Image from "next/image";
import { LinkButton, Button } from "./Button";
import Typography from "../common/Typography";

type ImageProps = {
  src: string;
  alt: string;
  imagePosition?: string;
};

type ButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
};

type Props = {
  title: string;
  subTitle?: string;
  image: ImageProps;
  button?: ButtonProps;
};

export default function HeroSection({ title, subTitle, image, button }: Props) {
  return (
    <div className="relative h-[650px] w-full">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className={"z-0 object-cover object-top"}
        placeholder="blur"
        blurDataURL="/images/blur.jpg"
        style={{ objectPosition: image.imagePosition }}
      />
      <div className="container z-10 flex h-full flex-col justify-center gap-2">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-primary/[0.95] to-primary/[0.3]"></div>
        <Typography variant="h1" className="z-20 max-w-3xl whitespace-pre-wrap">
          {title}
        </Typography>
        {subTitle && (
          <Typography
            variant="p"
            className="z-20 text-[16px] font-semibold text-on-primary lg:text-[20px]">
            {subTitle.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                <span>{line}</span>
                {index < subTitle.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </Typography>
        )}
        {button && (
          <div className="z-20 mt-6">
            {button.href ? (
              <LinkButton
                href={button.href}
                intent="secondary"
                className="flex justify-center sm:block sm:w-fit">
                {button.text}
              </LinkButton>
            ) : (
              <Button
                onClick={button?.onClick}
                intent="secondary"
                className="flex justify-center sm:block sm:w-fit">
                {button.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
