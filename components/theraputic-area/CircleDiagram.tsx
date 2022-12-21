import { useCallback, useEffect, useRef, useState } from "react";
import { useWindowScrollPositions } from "../../utils/scroll";

type Props = {
  svgClasses: string;
  textClasses: string;
  radius: number;
  text: string;
};

export default function CircleDiagram({
  svgClasses,
  textClasses,
  radius,
  text,
}: Props) {
  const circumference = Math.PI * (radius * 2); // used for property stroke-dasharray
  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference); // used for property stroke-dashoffset, used to "clip out" part of the circle
  const circleRef = useRef<SVGCircleElement>(null);
  const [isInViewport, setIsInViewport] = useState(false);

  const onScroll = useCallback(() => {
    // make the circle animate when it comes into viewport
    if (circleRef.current) {
      const boxCircle = circleRef.current.getBoundingClientRect();

      const diff = boxCircle.top - window.innerHeight;

      if (
        (boxCircle.bottom <= 0 ||
          (diff <= 0 && Math.abs(diff) > boxCircle.height)) &&
        isInViewport
      ) {
        console.log("TOGGLING " + isInViewport + " to " + !isInViewport);
        setIsInViewport(false);
        circleRef.current.style.transitionProperty =
          "stroke-dashoffset 0s ease-in-out 0.5s";
        setStrokeDashoffset(circumference);
      } else if (
        diff <= 0 &&
        boxCircle.top - window.innerHeight < boxCircle.height &&
        !isInViewport
      ) {
        console.log("TOGGLING " + isInViewport + " to ");
        setIsInViewport(true);
        circleRef.current.style.transition = "stroke-dashoffset 1s ease-in-out";
        setStrokeDashoffset(circumference / 2 - 15);
      }
    }
  }, [isInViewport]);

  useEffect(onScroll, []);

  useEffect(() => {
    addEventListener("scroll", onScroll);

    return () => {
      removeEventListener("scroll", onScroll);
    };
  }, [isInViewport]);

  return (
    <svg className={svgClasses} width={radius * 4} height={radius * 4}>
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0,99, 175, 0.75)" />
          <stop offset="100%" stopColor="rgba(0,99,175,1.0)" />
        </linearGradient>
      </defs>

      <circle
        ref={circleRef}
        className={
          " origin-center fill-transparent stroke-[50%] transition-[stroke-dashoffset] delay-200 duration-1000 ease-in-out"
        }
        cx="50%"
        cy="50%"
        r={radius}
        stroke="url(#linear)"
        style={{
          strokeDasharray: circumference,
          strokeDashoffset,
          transform: "scaleX(-1.0) rotate(-90deg)",
        }}
      />
      <text
        x="0%"
        y="50%"
        className={
          "translate-y-[0.5rem] translate-x-[1rem] fill-on-primary stroke-on-primary" +
          textClasses
        }>
        {text}
      </text>
    </svg>
  );
}
