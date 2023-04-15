import React from "react";
import Image from "next/image";
import Button from "../general/Button";
import Link from "next/link";

export default function DermalyserHero() {
  return (
    <div className="relative h-[650px] w-full">
      {" "}
      <Image
        src={"/images/home/dermalyser_in_action.jpg"}
        alt="Image of dermalyser in use"
        fill
        className={"z-0 object-cover"}
        placeholder="blur"
        blurDataURL="/images/blur.jpg"
      />
      <div className="container z-10 flex h-full flex-col justify-center">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-primary/[0.85]"></div>
        <h2 className="z-20 mb-6 max-w-3xl whitespace-pre-wrap text-xl font-bold text-white sm:text-3xl lg:text-4xl">
          {/* whitespace-pre-wrap text-lg font-bold text-on-primary sm:text-xl lg:w-1/2 lg:text-2xl */}
          Skin cancer is one of the most common cancers in the world, accounting
          for nearly half of all cancers
        </h2>
        <Link href={"/theraputic-area"} className="z-20">
          <Button>Learn more</Button>
        </Link>
      </div>
    </div>
  );
}
