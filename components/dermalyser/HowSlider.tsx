import { useState } from "react";
import Button from "../general/button";
import HowSlide from "./HowSlide";

const slides = [
  {
    title: "Fewer Melanomas Missed And Increased Performance",
    text: "We have a carefully curated database comprising over 100,000 images of fully labelled skin lesions that have been used to train our proprietary AI.",
    image: "/images/dermalyser/shrink_down.svg",
  },
  {
    title: "Reduced Number of Unnecessary Skin Excisions",
    text: "Supports reduction of unnecessary skin excisions thereby improving healthcare economics across multiple levels.",
    image: "/images/dermalyser/decline.svg",
  },
  {
    title: "Easy And Convenient",
    text: "AI empowered image analysis software enables easy analysis of a patient’s skin lesion on any mobile phone.",
    image: "/images/dermalyser/easy.svg",
  },
];

export default function HowSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = () => {
    setCurrentIdx((prevIdx) => {
      return prevIdx !== slides.length - 1 ? (prevIdx += 1) : prevIdx;
    });
  };

  const prevSlide = () => {
    setCurrentIdx((prevIdx) => {
      return prevIdx !== 0 ? (prevIdx -= 1) : prevIdx;
    });
  };

  /*

    slida hela ul åt väsnter eller höger

    så lägg ändra stilen translate



  */

  return (
    <div className="flex  flex-col items-center justify-center gap-4">
      <ul className="overflow relative flex h-96  w-full flex-row gap-x-[100vw] overscroll-contain  bg-background-primary transition-transform">
        {slides.map((s, i) => (
          <li
            className={"absolute h-full w-full"}
            key={s.title}
            style={{ transform: `translateX(calc(100vw * ${i}))` }}>
            <HowSlide {...s} />
          </li>
        ))}
      </ul>

      {currentIdx !== slides.length - 1 && (
        <Button isBlue={true} children="Next" onClick={nextSlide}></Button>
      )}
      {currentIdx !== 0 && (
        <Button isBlue={true} children="Next" onClick={prevSlide}></Button>
      )}
    </div>
  );
}
