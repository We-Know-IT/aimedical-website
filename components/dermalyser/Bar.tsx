import { useEffect, useRef, useState } from "react";
import { useElementInViewPort } from "../../utils/elementInViewPort";
import { useWindowDimensions } from "../../utils/resize";
import Typography from "../common/Typography";

type Props = {
  text: string;
  value: number;
  classes?: string;
  isHighlighted: boolean;
  valueText: string;
  ariaLabel: string;
};

const layoutWidthBreakpoint = 0; // same as tailwind "lg"

export default function Bar({
  text,
  value,
  classes,
  isHighlighted,
  valueText,
  ariaLabel,
}: Props) {
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

  const sectionInViewportState = useElementInViewPort(barRef);

  useEffect(() => {
    if (sectionInViewportState.isInViewport && !animateUp && !animateRight) {
      window.innerWidth > layoutWidthBreakpoint
        ? setAnimateRight(true)
        : setAnimateUp(true);
    }
  }, [sectionInViewportState]);

  const updateBarDimensions = () => {
    setBarHeight(
      dimensions.width > layoutWidthBreakpoint ? "100%" : value * 100 + "%"
    );
    setBarWidth(
      dimensions.width > layoutWidthBreakpoint ? value * 100 + "%" : "100%"
    );
  };

  useEffect(updateBarDimensions, [dimensions]);

  return (
    <div
      ref={barRef}
      className={
        " grid h-[30px] w-full grid-cols-[1fr_2fr] grid-rows-1 items-center justify-center gap-4 sm:h-[50px] " +
        classes
      }
      aria-label={ariaLabel}>
      <Typography
        className=" col-start-1 col-end-1 row-start-1 row-end-1 origin-center rotate-0 self-center whitespace-pre-wrap font-semibold "
        variant={"p"}>
        {text}
      </Typography>
      <div
        className={"relative col-start-2 col-end-2 row-start-1 row-end-1 "}
        style={{ width: barWidth, height: barHeight }}>
        <Typography
          variant="p"
          className={
            "absolute left-auto top-1/2 right-2 -translate-y-1/2 translate-x-0 font-semibold text-on-primary sm:right-4  " +
            (animateRight || animateUp ? "  animate-fade-in" : "")
          }>
          {valueText}
        </Typography>
        <div
          className={
            " h-full w-full rounded-md shadow-[0_2px_4px_0px_rgba(0,0,0,0.2)] sm:rounded-lg " +
            (isHighlighted
              ? dimensions.width > layoutWidthBreakpoint
                ? " bg-gradient-to-r from-primary/[0.8] to-primary "
                : " bg-gradient-to-t from-primary/[0.8] to-primary "
              : " bg-[#192645] ") +
            (animateRight ? " animate-right " : "") +
            (animateUp ? " origin-bottom animate-up " : "")
          }></div>
      </div>
    </div>
  );
}
