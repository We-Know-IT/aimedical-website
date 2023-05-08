import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useElementInViewPort } from "../../../utils/elementInViewPort";
import Button, { LinkButton } from "../Button";

type ImageProps = {
  src: string;
  alt: string;
};

type Props = {
  title?: string;
  text?: string;
  image?: ImageProps;
  actionButton?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  imageText?: string;
};
export default function TwoColImg({
  title,
  text,
  actionButton,
  image,
  imageText,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  const sectionInViewportState = useElementInViewPort(sectionRef, 200);

  useEffect(() => {
    if (sectionInViewportState.isInViewport && !animate) {
      setAnimate(true);
    }
  }, [sectionInViewportState, animate]);

  return (
    <section ref={sectionRef} className="bg-background-primary py-24">
      {/* Container */}
      <div
        className={
          "container flex max-w-xl flex-col xl:container xl:flex-row " +
          (animate ? " animate-fade-up " : " invisible animate-fade-down")
        }>
        {/* left box */}
        <div className="relative aspect-square w-full xl:w-2/5">
          <Image
            src={"/images/" + image?.src}
            alt={image?.alt || ""}
            fill
            className={
              "rounded-tl-xl rounded-tr-xl object-cover xl:rounded-bl-xl xl:rounded-tr-none"
            }
            placeholder="blur"
            blurDataURL="/images/blur.jpg"
          />
          {imageText && (
            <div className="absolute bottom-0 flex h-1/4 w-full items-end justify-end bg-gradient-to-t from-black/70 to-transparent p-6 text-lg font-bold text-on-primary xl:rounded-bl-xl">
              <p>{imageText}</p>
            </div>
          )}
        </div>
        {/* right box */}
        <div
          className="flex grow flex-col items-center justify-center space-y-6  rounded-bl-xl rounded-br-xl bg-gradient-to-br from-primary to-primary/50 px-6 
        py-12 xl:rounded-bl-none xl:rounded-tr-xl xl:rounded-br-xl">
          <div className="item-center flex  flex-col space-y-6">
            <h3 className="text-3xl font-semibold text-on-primary">{title}</h3>
            <p className="max-w-md text-lg tracking-wide text-on-primary">
              {text}
            </p>

            {actionButton &&
              (actionButton.href ? (
                <LinkButton href={actionButton.href}>
                  {actionButton.text}
                </LinkButton>
              ) : (
                <Button onClick={actionButton.onClick}>
                  {actionButton.text}
                </Button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
