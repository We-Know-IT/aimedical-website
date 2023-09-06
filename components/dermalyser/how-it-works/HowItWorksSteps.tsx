import React from "react";
import { HowItWorksSlide } from "./HowItWorks";
import Image from "next/image";

type HowItWorksStepsProps = {
  slides: HowItWorksSlide[];
};

type HowItWorksStepProps = {
  slide: HowItWorksSlide;
};

function HowItWorksStep({ slide }: HowItWorksStepProps) {
  return (
    <div className="flex flex-col items-center gap-8">
      <Image src={slide.image} width={312} height={524} alt={slide.imageAlt} />
      <p className="text-xl font-bold text-primary">{slide.title}</p>
      <p className="max-w-sm text-on-bg-primary">{slide.text}</p>
    </div>
  );
}

export default function HowItWorksSteps({ slides }: HowItWorksStepsProps) {
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="flex w-min flex-col items-center justify-center">
        <h3 className="whitespace-nowrap text-3xl font-bold text-primary">
          How it works
        </h3>
        <div className="h-[2px] w-3/4 bg-primary" />
      </div>
      <div className="flex justify-between gap-6">
        {slides.map((slide, index) => (
          <HowItWorksStep key={index} slide={slide} />
        ))}
      </div>
    </div>
  );
}
