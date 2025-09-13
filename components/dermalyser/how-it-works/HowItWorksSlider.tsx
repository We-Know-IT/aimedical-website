import { useEffect, useRef, useState } from "react";
import { useWindowDimensions } from "../../../utils/resize";
import InstructionSlide from "../InstructionSlide";
import { HowItWorksSlide } from "./HowItWorks";
import { Button } from "../../general/Button";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

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

  const previousSlide = () => {
    setSlideIdx((prevSlide) => prevSlide - 1);
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
    <>
      <ul ref={slidesRef} className={"-mt-16 flex flex-row overflow-x-hidden"}>
        {slides.map((s, i) => {
          if (i === slides.length - 1) {
            return (
              <li key={s.title} className="w-full shrink-0">
                <InstructionSlide {...s} />
              </li>
            );
          } else {
            return (
              <li key={s.title} className="w-full shrink-0">
                <InstructionSlide {...s} />
              </li>
            );
          }
        })}
      </ul>
      <div className="mx-auto mt-8 flex w-full max-w-sm gap-2">
        <div className="w-1/2">
          {slideIdx > 0 && (
            <Button
              className="flex w-full animate-fade-in items-center justify-center"
              onClick={previousSlide}
              intent="white">
              <>
                <BsArrowLeftShort size={20} className="mr-2" /> Previous
              </>
            </Button>
          )}
        </div>
        <div className="w-1/2">
          {slideIdx < slides.length - 1 && (
            <Button
              className="flex w-full animate-fade-in items-center justify-center"
              onClick={nextSlide}>
              <>
                Next <BsArrowRightShort size={20} className="ml-2" />
              </>
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
