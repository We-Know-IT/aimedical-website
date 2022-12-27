import { useEffect, useRef, useState } from "react";
import { useWindowDimensions } from "../../utils/resize";
import InstructionSlide from "./InstructionSlide";

const slides = [
  {
    title: "1. Download the app",
    text: "Easily download the Dermalyser app on to any mobile device. The app works on both Android and iOS.",
    image: "/images/dermalyser/slide_1.png",
  },
  {
    title: "2. Enter in patient's details",
    text: "Securily upload the patient's details to the app, including age and sex.",
    image: "/images/dermalyser/slide_1.png",
  },
  {
    title: "3. Take a Picture",
    text: "Using a dermascope which can be easily attached to the device camera, take a picture of the suspect skin lesion. ",
    image: "/images/dermalyser/slide_1.png",
  },
  {
    title: "4. Receive Results",
    text: "The image is analysed using our proprietary AI software and reports back the malignancy risk in real time.",
    image: "/images/dermalyser/slide_1.png",
  },
];

export default function How() {
  const { width } = useWindowDimensions();

  const slidesRef = useRef<HTMLUListElement>(null);
  const [slideIdx, setSlideIdx] = useState(0);

  const nextSlide = () => {
    if (slidesRef.current) {
      slidesRef.current.scrollBy({
        top: 0,
        left: slidesRef.current.clientWidth,
        behavior: "smooth",
      });
    }
    setSlideIdx(slideIdx + 1);
  };

  const returnToFirstSlide = () => {
    if (slidesRef.current) {
      slidesRef.current.scrollBy({
        top: 0,
        left: -slidesRef.current.clientWidth * (slides.length - 1),
        behavior: "smooth",
      });
      setSlideIdx(0);
    }
  };

  const updateSlidesScrollOnResize = () => {
    if (slidesRef.current) {
      slidesRef.current.scrollTo({
        top: 0,
        left: slidesRef.current.clientWidth * slideIdx,
      });
    }
  };

  useEffect(updateSlidesScrollOnResize, [width]);

  return (
    <section className="bg-background-primary py-24 lg:py-32">
      <div className="container max-w-xl lg:container">
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
      </div>
    </section>
  );
}
