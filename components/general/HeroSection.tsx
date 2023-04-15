import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

type ImageProps = {
  src: string;
  alt: string;
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

function LinkButton({ text, href, onClick }: ButtonProps) {
  return (
    <Link href={href || ""}>
      <Button onClick={onClick}>{text}</Button>
    </Link>
  );
}

export default function HeroSection({ title, subTitle, image, button }: Props) {
  return (
    <div className="relative h-[650px] w-full">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className={"z-0 object-cover"}
        placeholder="blur"
        blurDataURL="/images/blur.jpg"
      />
      <div className="container z-10 flex h-full flex-col justify-center gap-6">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-primary/[0.85]"></div>
        <h2 className="z-20 max-w-3xl whitespace-pre-wrap text-xl font-bold text-white sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        {subTitle && (
          <p className="z-20 text-lg text-on-primary sm:text-xl lg:text-2xl">
            {subTitle.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                <span>{line}</span>
                {index < subTitle.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        )}
        {button && (
          <div className="z-20">
            {button.href ? (
              <LinkButton {...button} />
            ) : (
              <Button onClick={button?.onClick}>{button.text}</Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
