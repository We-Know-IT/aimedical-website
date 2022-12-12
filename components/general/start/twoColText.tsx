import { CSSProperties } from "react";
import ActionButton from "../actionButton";
import Button from "../button";
import Image from "next/image";
type Props = {
  title?: string;
  text?: string;
  actionButton: {
    text: string;
    onClick: () => void;
  };
  list?: {
    title: string;
    text: string;
    img: string;
  }[];
};

export default function TwoColText({ title, text, actionButton, list }: Props) {
  return (
    /*<div className="w-full h-[75vh] bg-gray-100 flex px-2 pb-24 lg:justify-evenly lg:p-0 lg:py-24">*/
    /* Container */
    <section className="bg-background-secondary py-24">
      {/* Container */}
      <div className="container flex flex-col justify-between items-center xl:flex-row max-w-xl xl:container">
        {/* flex box */}
        <div className="flex flex-col justify-center space-y-10 p-4 xl:w-1/3">
          {/* left box */}
          <h2 className="text-3xl text-blue-100 font-semibold lg:text-4xl leading-snug">
            {title}
          </h2>
          <p className="text-lg tracking-wider font-semibold leading-snug">
            {text}
          </p>
          {actionButton && (
            <Button onClick={actionButton.onClick}>{actionButton.text}</Button>
          )}
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex gap-y-6 px-4 py-20 justify-center flex-col lg:items-center lg:justify-evenly lg:gap-y-0 xl:w-1/2 space-y-8">
          {/*  bg-gradient-to-r from-blue-50 to-blue-100*/}
          {list &&
            list.map((data) => (
              <div
                className="lg:w-2/3 flex justify-center items-center w-full"
                key={data.title}>
                <div className="w-1/5 h-full flex justify-center items-center">
                  <Image
                    src={"/images/" + data.img}
                    alt={""}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="w-4/5">
                  <h3 className="text-2xl font-semibold text-white py-2 3lg:text-3xl">
                    {data.title}
                  </h3>
                  <p className="text-lg leading-snug text-white tracking-wide 3lg:text-xl">
                    {data.text}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
