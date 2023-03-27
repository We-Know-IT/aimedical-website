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
    image: "/images/dermalyser/slide_2.png",
  },
  {
    title: "3. Take a Picture",
    text: "Using a dermascope which can be easily attached to the device camera, take a picture of the suspect skin lesion. ",
    image: "/images/dermalyser/slide_3.png",
  },
  {
    title: "4. Receive Results",
    text: "The image is analysed using our proprietary AI software and reports back the malignancy risk in real time.",
    image: "/images/dermalyser/slide_4.png",
  },
];

export default function How() {
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
    <section className="bg-background-primary py-24 lg:py-32">
      <div className="max-w-xllg:container container">
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
