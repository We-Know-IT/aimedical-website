import React from "react";
import Image from "next/image";
import Typography from "../../common/Typography";

const slides = [
  {
    title: "Step 1, Download and get started",
    text: "Install the Dermalyser app on your smartphone. Works on both iOS and Android.",
    image: "/images/dermalyser/slide_1.png",
    imageAlt: "Dermalyser app on a mobile device",
  },
  {
    title: "Step 2, One Image",
    text: "Attach your dermatoscope, take a dermoscopic image, and upload it securely.",
    image: "/images/dermalyser/slide_2.png",
    imageAlt: "Dermascope being used to take a picture of a skin lesion",
  },
  {
    title: "Step 3, Receive instant diagnostic support",
    text: "Dermalyser analyses the image in seconds and provides AI-driven decision support to guide your next step.",
    image: "/images/dermalyser/slide_3.png",
    imageAlt: "Results being displayed on the app",
  },
];

export interface HowItWorksSlide {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
}

type HowItWorksStepProps = {
  slide: HowItWorksSlide;
};

function HowItWorksStep({ slide }: HowItWorksStepProps) {
  return (
    <div className="bg-background-secondary flex flex-col items-center gap-8 rounded-lg p-6 md:p-12 min-h-[400px] md:min-h-[450px]">
      <Typography variant="h3" className="font-haasGrotDisplay font-normal text-primary self-start text-left text-sm">{slide.title}</Typography>
      <Image src={slide.image} width={312/2} height={524/2} alt={slide.imageAlt} />
      <Typography variant="p" className="max-w-sm font-haasGrotDisplay font-normal text-darkblue text-sm text-left">
        {slide.text}
      </Typography>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-background-primary pb-12 ">
      <div className="container max-w-xl lg:container">
        <div className="flex flex-col md:flex-row items-stretch gap-6">
              {slides.map((slide, index) => (
                <HowItWorksStep key={index} slide={slide} />
              ))}
          </div>
      </div>
    </section>
  );
}
