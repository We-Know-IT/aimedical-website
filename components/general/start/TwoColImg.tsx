import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useElementInViewPort } from "../../../utils/elementInViewPort";
import { LinkButton, Button } from "../Button";
import Typography from "../../common/Typography";
import { ImageProps } from "next/image";

type Props = {
  title?: string;
  text?: string;
  image?: ImageProps;
  actionButton?: {
    children: React.ReactNode | string;
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
    <section ref={sectionRef} className="bg-background-primary py-10">
      {/* Container */}
      <div
        className={
          "container flex max-w-2xl flex-col xl:container xl:flex-row " +
          (animate ? " animate-fade-up " : " invisible animate-fade-down")
        }>
        {/* left box */}
        <div className="relative aspect-square w-full h-80 sm:h-96 lg:h-auto xl:w-2/5">
          <Image
            {...image}
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
            <div className="absolute bottom-0 flex h-1/4 w-full items-end bg-gradient-to-t from-black/70 to-transparent p-4 xl:justify-end xl:rounded-bl-xl">
              <Typography variant="h3" className="text-white">
                {imageText}
              </Typography>
            </div>
          )}
        </div>
        {/* right box */}
        <div className="flex grow flex-col items-center justify-center rounded-bl-xl rounded-br-xl bg-[#E6E6E6] p-4 xl:rounded-bl-none xl:rounded-tr-xl xl:rounded-br-xl">
          <div className="item-center flex  flex-col">
            <Typography variant="h2" className="mb-2">
              {title}
            </Typography>
            <Typography variant="p" className="mb-6 max-w-md">
              {text}
            </Typography>

            {actionButton &&
              (actionButton.href ? (
                <LinkButton
                  href={actionButton.href}
                  className="flex items-center justify-center xl:w-fit">
                  {actionButton.children}
                </LinkButton>
              ) : (
                <Button
                  onClick={actionButton.onClick}
                  className="flex items-center justify-center xl:w-fit">
                  {actionButton.children}
                </Button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
