import { useEffect, useRef, useState } from "react";
import { useWindowDimensions } from "../../utils/resize";

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
  const dimensions = useWindowDimensions();
  const [barHeight, setBarHeight] = useState(
    dimensions.width > 768 ? "50px" : value * 100 + "%"
  );
  const [barWidth, setBarWidth] = useState(
    dimensions.width > 768 ? value * 100 + "%" : "60px"
  );

  // OBS: will be replaced by custom hook on another branch
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

  const updateBarDimensions = () => {
    setBarHeight(dimensions.width > 768 ? "100%" : value * 100 + "%");
    setBarWidth(dimensions.width > 768 ? value * 100 + "%" : "100%");
  };

  useEffect(() => {
    addEventListener("scroll", onScroll);

    return () => {
      removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(updateBarDimensions, [dimensions]);

  return (
    <div
      ref={barRef}
      className={
        " grid h-[400px] w-[75px] grid-cols-1 grid-rows-[2fr_1fr] items-end justify-center gap-4  md:h-[60px] md:w-[500px] md:grid-cols-[1fr_2fr]  md:grid-rows-1 md:items-center " +
        classes
      }>
      <p className=" row-start-2 row-end-2 origin-center -rotate-90 self-center whitespace-pre-wrap font-bold text-on-bg-primary md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-1 md:rotate-0 md:text-lg">
        {text}
      </p>
      <div
        className={"relative row-start-1 row-end-1 md:col-start-2 md:col-end-2"}
        style={{ width: barWidth, height: barHeight }}>
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
