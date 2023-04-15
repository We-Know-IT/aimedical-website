import { useEffect, useRef, useState } from "react";
import { useWindowDimensions } from "../../../utils/resize";
import InstructionSlide from "../InstructionSlide";
import { HowItWorksSlide } from "./HowItWorks";

type Props = {
  slides: HowItWorksSlide[];
};

export default function HowItWorksSlider({ slides }: Props) {
  const { width } = useWindowDimensions();

  const slidesRef = useRef<HTMLUListElement>(null);
  const [slideIdx, setSlideIdx] = useState(0);

  const nextSlide = () => {
    setSlideIdx((prevSlide) => prevSlide + 1);
  };

  const returnToFirstSlide = () => {
    setSlideIdx(0);
  };

  const updateSlidesScrollOnResize = () => {
    if (slidesRef.current) {
      slidesRef.current.scrollTo({
        top: 0,
        left: slidesRef.current.offsetWidth * slideIdx,
      });
    }
  };

  const updateSlidesScrollOnSlideChange = () => {
    if (slidesRef.current) {
      slidesRef.current.scrollTo({
        top: 0,
        left: slidesRef.current.offsetWidth * slideIdx,
        behavior: "smooth",
      });
    }
  };

  useEffect(updateSlidesScrollOnSlideChange, [slideIdx]);

  useEffect(updateSlidesScrollOnResize, [width]);

  return (
    <ul ref={slidesRef} className={"flex flex-row overflow-x-hidden"}>
      {slides.map((s, i) => {
        if (i === slides.length - 1) {
          return (
            <li key={s.title} className="w-full shrink-0">
              <InstructionSlide
                {...s}
                onClick={returnToFirstSlide}
                buttonText="Return"
                buttonIcon={<>&lsaquo;</>}
                iconPosition="left"
              />
            </li>
          );
        } else {
          return (
            <li key={s.title} className="w-full shrink-0">
              <InstructionSlide
                {...s}
                onClick={nextSlide}
                buttonText="Next"
                buttonIcon={<>&rsaquo; </>}
                iconPosition="right"
              />
            </li>
          );
        }
      })}
    </ul>
  );
}
