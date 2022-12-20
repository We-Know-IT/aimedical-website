import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  value: number;
  classes: string;
  isHighlighted: boolean;
};

export default function Bar({ text, value, classes, isHighlighted }: Props) {
  const barRef = useRef<HTMLDivElement>(null);
  const [animateUp, setAnimateUp] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  const onScroll = () => {
    // make the bar animate when it comes into viewport
    if (barRef.current) {
      const box = barRef.current.getBoundingClientRect();
      if (box.top - window.innerHeight <= 0) {
        window.innerWidth > 768 ? setAnimateRight(true) : setAnimateUp(true);
      } else {
        setAnimateRight(false);
        setAnimateUp(false);
      }
    }
  };

  useEffect(() => {
    addEventListener("scroll", onScroll);

    return () => {
      removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className={
        "flex h-[275px] w-[80px] flex-col-reverse items-center justify-between md:h-[50px]  md:w-[500px] md:flex-row " +
        classes
      }>
      <p className="origin-center -rotate-90 whitespace-pre-wrap font-bold text-on-bg-primary md:rotate-0 md:text-lg">
        {text}
      </p>
      <div className="relative h-[175px] w-[60px] md:h-[50px] md:w-[300px]">
        <p
          className={
            "absolute top-2 left-1/2 -translate-x-1/2 text-lg font-bold text-on-primary md:left-auto md:top-1/2 md:right-2 md:-translate-y-1/2 md:translate-x-0  " +
            (animateRight || animateUp ? "  animate-fade-in" : "")
          }>
          {value}
        </p>
        <div
          className={
            " h-full w-full rounded-xl" +
            (isHighlighted
              ? " bg-gradient-to-r from-primary to-primary/[0.75]"
              : " bg-on-bg-primary ") +
            (animateRight ? " animate-right " : "") +
            (animateUp ? " origin-bottom animate-up " : "")
          }></div>
      </div>
    </div>
  );
}
