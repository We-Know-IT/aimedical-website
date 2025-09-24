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
];

export default function PartnerSection() {
  return (
    <section className="pb-10">
       <div className="container flex flex-row items-center justify-between xl:flex-col space-y-6 xl:space-y-0 gap-6">
        <div 
          className="flex rounded-xl p-8 py-12 w-full items-center justify-between relative"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(250,249,247,0.6) 20%, rgba(250,249,247,0.8) 60%, rgba(250,249,247,1) 100%)'
          }}
        >
         <Typography variant="h3" className="font-robotoFlex text-darkblue-page-active font-normal whitespace-nowrap flex-shrink-0">Our Partners</Typography>
      {/* Mobile marquee */}
      {/* IMPLEMENT */}
      
        {/* Desktop grid */}
        <div className="hidden md:block flex-1 overflow-hidden relative">
          <div className="flex gap-4 whitespace-nowrap items-center justify-center px-8 py-4 animate-cascade">
            {/* First set of logos */}
            {partners.map((img, i) => (
              <div
                key={`desktop-first-${i}`}
                className="relative h-20 flex-shrink-0 rounded-lg py-2 px-2 w-48 flex items-center justify-center">
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
                className="relative h-20 flex-shrink-0 rounded-lg py-2 px-2 w-48 flex items-center justify-center">
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
        </div>
        </div>
      </div>
    </section>
  );
}
