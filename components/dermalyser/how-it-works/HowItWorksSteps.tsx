import React from "react";
import { HowItWorksSlide } from "./HowItWorks";
import Image from "next/image";
import Typography from "../../common/Typography";

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
      <Typography variant="h2">{slide.title}</Typography>
      <Typography variant="p" className="max-w-sm">
        {slide.text}
      </Typography>
    </div>
  );
}

export default function HowItWorksSteps({ slides }: HowItWorksStepsProps) {
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="flex w-min flex-col items-center justify-center">
        <Typography variant="h2" className="whitespace-nowrap">
          How it works
        </Typography>
        <div className="h-[4px] w-full rounded-full bg-primary sm:hidden" />
      </div>
      <div className="flex justify-between gap-6">
        {slides.map((slide, index) => (
          <HowItWorksStep key={index} slide={slide} />
        ))}
      </div>
    </div>
  );
}
