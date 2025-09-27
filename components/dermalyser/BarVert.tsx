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

const layoutWidthBreakpoint = 1024; // same as tailwind "lg"

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
    dimensions.width > layoutWidthBreakpoint ? value * 100 + "%" : value * 100 + "%"
  );
  const [barWidth, setBarWidth] = useState(
    dimensions.width > layoutWidthBreakpoint ? "140px" : "100px"
  );

  const sectionInViewportState = useElementInViewPort(barRef);

  useEffect(() => {
    if (sectionInViewportState.isInViewport && !animateUp && !animateRight) {
      setAnimateUp(true);
    }
  }, [sectionInViewportState]);

  const updateBarDimensions = () => {
    setBarHeight(
      dimensions.width > layoutWidthBreakpoint ? value * 100 + "%" : value * 100 + "%"
    );
    setBarWidth(
      dimensions.width > layoutWidthBreakpoint ? "140px" : "100px"
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
        " relative w-full max-w-[140px] sm:w-[140px] h-full flex flex-col justify-end " +
        classes
      }
      aria-label={ariaLabel}>
      <div
        className={"relative w-full h-full flex flex-col justify-end"}
        style={{ width: barWidth, height: barHeight }}>
        {/* Bar background */}
        <div
          className={
            " w-full rounded-md sm:rounded-md relative " +
            (animateUp ? " origin-bottom animate-up " : "")
          }
          style={{ 
            backgroundColor: getBarColor(barIndex),
            height: dimensions.width > layoutWidthBreakpoint ? value * 100 + "%" : value * 100 + "%"
          }}>
          
          {/* Bar label text at bottom of the bar */}
          <Typography
            className="absolute left-1/2 bottom-3 -translate-x-1/2 whitespace-pre-line font-robotoFlex font-normal text-darkblue z-10 pointer-events-none text-[12px] text-center"
            variant={"p"}>
            {text}
          </Typography>
          
          {/* Value text at top of the bar */}
          <Typography
            variant="p"
            className={
              "absolute left-1/2 top-4 -translate-x-1/2 font-robotoFlex font-normal text-primary text-xs text-center " +
              (animateUp ? "  animate-fade-in" : "")
            }>
            {valueText}
          </Typography>
        </div>
      </div>
    </div>
  );
}
