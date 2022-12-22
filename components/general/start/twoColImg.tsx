import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useElementInViewPort } from "../../../utils/elementInViewPort";
import Button from "../button";
type Props = {
  title?: string;
  text?: string;
  image?: string;
  actionButton?: {
    text: string;
    onClick: () => void;
  };
};
export default function TwoColImg({ title, text, actionButton, image }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  const sectionInViewportState = useElementInViewPort(sectionRef);

  useEffect(() => {
    if (
      sectionInViewportState.isInViewport &&
      sectionInViewportState.direction === "down"
    ) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [sectionInViewportState]);

  return (
    <section ref={sectionRef} className="bg-background-primary py-24">
      {/* Container */}
      <div
        className={
          "container flex max-w-xl flex-col xl:container xl:flex-row " +
          (animate ? " animate-fade-up " : "")
        }>
        {/* left box */}
        <div className="relative aspect-square w-full xl:w-2/5">
          <Image
            src={"/images/" + image}
            alt="Doctor crossed arms"
            fill
            className={
              "rounded-tl-xl rounded-tr-xl object-cover xl:rounded-bl-xl xl:rounded-tr-none"
            }
          />
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

            {actionButton && (
              <Button onClick={actionButton.onClick}>
                {actionButton.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
