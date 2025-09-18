import React from "react";
import Image from "next/image";
import Typography from "../common/Typography";
import { twMerge } from "tailwind-merge";

const partners = [
  {
    src: "home/partners/ai.svg",
    alt: "AI Sweden Logo Black",
    height: 200,
    width: 200,
    cols: "col-span-1",
  },
  {
    src: "home/partners/ki.svg",
    alt: "Karolinska Institutet Logo Plum",
    height: 200,
    width: 400,
    cols: "col-span-1",
  },
  {
    src: "home/partners/liu.svg",
    alt: "Linköping University Logo Black",
    height: 200,
    width: 400,
    cols: "col-span-1",
  },
  {
    src: "home/partners/aida.svg",
    alt: "AIDA Logo",
    height: 200,
    width: 400,
    cols: "col-span-1",
  },
  {
    src: "home/partners/ai.svg",
    alt: "AI Sweden Logo Black",
    height: 200,
    width: 200,
    cols: "col-span-1",
  },
  {
    src: "home/partners/ki.svg",
    alt: "Karolinska Institutet Logo Plum",
    height: 200,
    width: 400,
    cols: "col-span-1",
  },
    {
    src: "home/partners/liu.svg",
    alt: "Linköping University Logo Black",
    height: 200,
    width: 400,
    cols: "col-span-1",
  },
  {
    src: "home/partners/aida.svg",
    alt: "AIDA Logo",
    height: 200,
    width: 400,
    cols: "col-span-1",
  },
];

export default function PartnerSection() {
  return (
    <section className="flex w-full flex-col items-center space-y-3 py-10 pb-24 md:px-0 lg:space-y-6">
      <Typography variant="h2" className="font-haasGrotDisplay font-normal pb-4">Our Partners</Typography>
      {/* Mobile marquee */}
      <div className="w-full overflow-hidden md:hidden relative">
        <div className="flex animate-marquee gap-4 whitespace-nowrap" style={{ width: '390.4px' }}>
          {/* First set of logos */}
          {partners.map((img, i) => (
            <div
              key={`mobile-first-${i}`}
              className="relative h-20 flex-shrink-0 rounded-lg bg-background-secondary py-4 px-2 w-48">
              <Image
                src={"/images/" + img.src}
                alt={img.alt}
                height={img.height}
                width={img.width}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((img, i) => (
            <div
              key={`mobile-second-${i}`}
              className="relative h-20 flex-shrink-0 rounded-lg bg-background-secondary py-4 px-2 w-48">
              <Image
                src={"/images/" + img.src}
                alt={img.alt}
                height={img.height}
                width={img.width}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
        {/* Left vignette */}
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
        {/* Right vignette */}
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
      </div>
      
      {/* Desktop grid */}
      <div className="hidden md:block w-full overflow-hidden relative">
        <div className="flex animate-marquee-desktop gap-4 whitespace-nowrap" style={{ width: '390.4px' }}>
          {/* First set of logos */}
          {partners.map((img, i) => (
            <div
              key={`desktop-first-${i}`}
              className="relative h-20 flex-shrink-0 rounded-lg bg-background-secondary py-4 px-2 w-48">
              <Image
                src={"/images/" + img.src}
                alt={img.alt}
                height={img.height}
                width={img.width}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((img, i) => (
            <div
              key={`desktop-second-${i}`}
              className="relative h-20 flex-shrink-0 rounded-lg bg-background-secondary py-4 px-2 w-48">
              <Image
                src={"/images/" + img.src}
                alt={img.alt}
                height={img.height}
                width={img.width}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
        {/* Left vignette */}
        <div className="absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
        {/* Right vignette */}
        <div className="absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* <ul>
        <li key={sahlgrenska.alt} className={"h-12"}>
          <Image
            src={"/images/" + sahlgrenska.src}
            alt={sahlgrenska.alt}
            height={sahlgrenska.height}
            width={sahlgrenska.width}
            quality={100}
          />
        </li>
      </ul> */}
    </section>
  );
}
