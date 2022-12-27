import { useEffect, useRef, useState } from "react";
import { useWindowDimensions } from "../../utils/resize";

type Props = {
  text: string;
  value: number;
  classes: string;
  isHighlighted: boolean;
};

const layoutWidthBreakpoint = 1024; // same as tailwind "lg"

export default function Bar({ text, value, classes, isHighlighted }: Props) {
  const barRef = useRef<HTMLDivElement>(null);
  const [animateUp, setAnimateUp] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);
  const dimensions = useWindowDimensions();
  const [barHeight, setBarHeight] = useState(
    dimensions.width > layoutWidthBreakpoint ? "70px" : value * 100 + "%"
  );
  const [barWidth, setBarWidth] = useState(
    dimensions.width > layoutWidthBreakpoint ? value * 100 + "%" : "70px"
  );

  // OBS: will be replaced by custom hook on another branch
  const onScroll = () => {
    // make the bar animate when it comes into viewport
    if (barRef.current) {
      const box = barRef.current.getBoundingClientRect();
      if (box.top - window.innerHeight <= 0) {
        window.innerWidth > layoutWidthBreakpoint
          ? setAnimateRight(true)
          : setAnimateUp(true);
      } else {
        setAnimateRight(false);
        setAnimateUp(false);
      }
    }
  };

  const updateBarDimensions = () => {
    setBarHeight(
      dimensions.width > layoutWidthBreakpoint ? "100%" : value * 100 + "%"
    );
    setBarWidth(
      dimensions.width > layoutWidthBreakpoint ? value * 100 + "%" : "100%"
    );
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
        " grid h-[400px] w-[70px] grid-cols-1 grid-rows-[2fr_1fr] items-end justify-center gap-4  lg:h-[70px] lg:w-full lg:grid-cols-[1fr_2fr]  lg:grid-rows-1 lg:items-center " +
        classes
      }>
      <p className="row-start-2 row-end-2 origin-center -rotate-90 self-center whitespace-pre-wrap font-bold text-on-bg-primary lg:col-start-1 lg:col-end-1 lg:row-start-1 lg:row-end-1 lg:rotate-0 lg:text-lg">
        {text}
      </p>
      <div
        className={"relative row-start-1 row-end-1 lg:col-start-2 lg:col-end-2"}
        style={{ width: barWidth, height: barHeight }}>
        <p
          className={
            "absolute top-2 left-1/2 -translate-x-1/2 text-lg font-bold text-on-primary lg:left-auto lg:top-1/2 lg:right-2 lg:-translate-y-1/2 lg:translate-x-0  " +
            (animateRight || animateUp ? "  animate-fade-in" : "")
          }>
          {value}
        </p>
        <div
          className={
            " h-full w-full rounded-xl shadow-[0_2px_4px_0px_rgba(0,0,0,0.2)] " +
            (isHighlighted
              ? dimensions.width > layoutWidthBreakpoint
                ? " bg-gradient-to-r from-primary/[0.5] to-primary "
                : " bg-gradient-to-t from-primary/[0.5] to-primary "
              : " bg-on-bg-primary ") +
            (animateRight ? " animate-right " : "") +
            (animateUp ? " origin-bottom animate-up " : "")
          }></div>
      </div>
    </div>
  );
}
