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
  barIndex?: number;
};

const layoutWidthBreakpoint = 0; // same as tailwind "lg"

export default function Bar({
  text,
  value,
  classes,
  isHighlighted,
  valueText,
  ariaLabel,
  barIndex = 0,
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

  const getBarColor = (index: number) => {
    const colors = ['#CEE9FF', '#DBEFFF', '#EBF6FF'];
    return colors[index] || colors[0];
  };

  return (
    <div
      ref={barRef}
      className={
        " relative h-[40px] w-full sm:h-[60px] " +
        classes
      }
      aria-label={ariaLabel}>
      <div
        className={"relative w-full h-full"}
        style={{ width: barWidth, height: barHeight }}>
        {/* Bar background */}
        <div
          className={
            " h-full w-full rounded-md sm:rounded-md " +
            (animateRight ? " animate-right " : "") +
            (animateUp ? " origin-bottom animate-up " : "")
          }
          style={{ backgroundColor: getBarColor(barIndex) }}></div>
        
        {/* Overlaid bar label text */}
        <Typography
          className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-pre-wrap font-haasGrotDisplay font-light text-darkblue z-10 pointer-events-none text-sm sm:text-sm"
          variant={"p"}>
          {text}
        </Typography>
        
        {/* Value text on the right */}
        <Typography
          variant="p"
          className={
            "absolute left-auto top-1/2 right-2 -translate-y-1/2 translate-x-0 font-haasGrotDisplay font-light text-primary sm:right-4  " +
            (animateRight || animateUp ? "  animate-fade-in" : "")
          }>
          {valueText}
        </Typography>
      </div>
    </div>
  );
}
