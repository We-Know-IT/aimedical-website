import { useEffect, useRef, useState, RefObject } from "react";
import { useElementInViewPort } from "../../utils/elementInViewPort";

type Props = {
  svgClasses: string;
  textClasses: string;
  radius: number;
  fillPercentage: number;
  text: string;
};

export default function CircleDiagram({
  svgClasses,
  textClasses,
  radius,
  text,
  fillPercentage,
}: Props) {
  const diameter = radius * 2;
  const circumference = Math.PI * diameter; // used for property stroke-dasharray of the circle.
  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference); // used to remove part of the circle by setting an offset to the stroke-dash that is beeing drawn.
  const circleRef = useRef<SVGCircleElement>(null); // used to calculate position of the circle on scroll event and animate it when it comes into viewport.
  const svgWidthAndHeight = diameter * 2; // the svg element needs to be twice as big as the circle since the method of drawing the circle is by drawing it with thick strokes. So even if the
  // diameter of the <circle> is 100, it takes up the whole 200 width svg.

  const circleInViewportState = useElementInViewPort(
    circleRef as unknown as RefObject<HTMLElement>,
    diameter / 3
  );

  /**
   * Animates the circle by:
   *
   * 1. Toggles transition style on the circle by adding transition of the "stroke-dashoffset".
   * 2. Change length of the stroke-dashoffset to toggle between the full circumference, which results in no dash beeing drawn since it is offsetet away and
   *    a part of the circumference, a little less than half of it, to show a part of the circle.
   *
   * FYI: Transitions are used instead of css animation since we wanted to use dynamic values for the stroke-dashoffset.
   */
  const animateCircle = () => {
    if (circleRef.current) {
      if (circleInViewportState.isInViewport) {
        circleRef.current.style.transition = "stroke-dashoffset 1s ease-in-out";
        setStrokeDashoffset(circumference * (1 - fillPercentage / 100));
      } else {
        ("stroke-dashoffset 0s");
        setStrokeDashoffset(circumference);
      }
    }
  };

  useEffect(animateCircle, [circleInViewportState]);

  return (
    <svg
      className={svgClasses}
      width={svgWidthAndHeight}
      height={svgWidthAndHeight}>
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0,99, 175, 0.75)" />
          <stop offset="100%" stopColor="rgba(0,99,175,1.0)" />
        </linearGradient>
      </defs>

      <circle
        ref={circleRef}
        className={" origin-center fill-transparent stroke-[50%]"}
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
        x="10%"
        y="50%"
        className={
          "translate-y-[0.5rem]  fill-on-primary stroke-on-primary" +
          textClasses
        }>
        {text}
      </text>
    </svg>
  );
}
